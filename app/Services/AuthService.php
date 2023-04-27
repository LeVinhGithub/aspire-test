<?php

namespace App\Services;

use App\Models\Testing;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class AuthService
{
    /**
     * @throws \Exception
     */
    public function grantToken(array $input): array
    {
        if ($input['grant_type'] == 'refresh_token') {
            $token = JWTAuth::setToken($input['token'])->refresh();

            return $this->responseWithToken($token);
        }

        $token = match (true) {
            isset($input['email']) => $this->loginByEmail($input),
            default => throw new \Exception(__('errors.login_method_error'))
        };

        return $this->responseWithToken($token);
    }

    private function loginByEmail(array $input)
    {
        $credential = collect($input)->only(['email', 'password'])->toArray();
        $scope = $input['scope'];
        $token = \auth($scope)->attempt($credential);

        if (! $token) {
            throw new UnauthorizedHttpException('', __('auth.failed'));
        }

        return $token;
    }

    public function resetPassword(array $input, string $provider)
    {
        $model = $this->getAuthModelFromProvider($provider);

        $authUser = $model::where('email', '=', $input['email'])->first();

        if ($authUser) {
            $authUser->sendPasswordResetNotification();
        }

        return ['success' => true];
    }

    public function verifyResetPassword(array $input, string $provider)
    {
        $model = $this->getAuthModelFromProvider($provider);

        $authUser = $model::where('reset_password_token', '=', $input['reset_token'])->first();

        if (! $authUser) {
            throw new BadRequestHttpException(__('passwords.token_invalid'));
        }

        $tokenExpireTime = $authUser->reset_password_sent_at->addMinute(config("auth.password.$provider.expire", 60));

        if (Carbon::now()->isAfter($tokenExpireTime)) {
            throw new BadRequestHttpException(__('passwords.token_expired'));
        }

        $authUser->fill([
            'password' => $input['password'],
            'reset_password_token' => null,
            'reset_password_sent_at' => null,
        ])->save();

        return ['success' => true];
    }

    public function testingEmailRegistration(array $input)
    {
        $testing = Testing::create($input['testing']);
        $token = JWTAuth::fromUser($testing);
        event(new Registered($testing));

        return $this->responseWithToken($token);
    }

    public function changePassword(array $input)
    {
        $user = \auth()->user();

        if (! Hash::check($input['old_password'], $user->encrypted_password)) {
            throw new BadRequestHttpException(__('passwords.password_invalid'));
        }

        $user->fill(['password' => $input['new_password']])->save();

        return ['success' => true];
    }

    public function verifyEmail(array $input, string $provider)
    {
        $model = $this->getAuthModelFromProvider($provider);

        $authUser = $model::where('confirmation_token', '=', $input['confirmation_token'])->first();

        if (! $authUser) {
            throw new BadRequestHttpException(__('passwords.token_invalid'));
        }

        $tokenExpireTime = $authUser->confirmation_sent_at->addMinute(config("auth.verification.$provider.expire", 60));

        if (Carbon::now()->isAfter($tokenExpireTime)) {
            throw new BadRequestHttpException(__('passwords.token_expired'));
        }

        $authUser->fill([
            'confirmation_token' => null,
            'confirmation_sent_at' => null,
            'confirmed_at' => $authUser->freshTimestamp(),
        ])->save();

        $token = JWTAuth::fromUser($authUser);

        return $this->responseWithToken($token);
    }

    public function unlock(array $input, $provider)
    {
        $model = $this->getAuthModelFromProvider($provider);

        $authUser = $model::where('unlock_token', '=', $input['unlock_token'])->first();

        if (! $authUser) {
            throw new BadRequestHttpException(__('passwords.token_invalid'));
        }

        $authUser->releaseLock();

        return ['success' => true];
    }

    public function revoke(array $input): void
    {
        $payload = auth()->setToken($input['token'])->getPayload();
        auth($payload->get('scope'))->setToken($input['token'])->logout();
    }

    public function getAuthModelFromProvider(string $provider)
    {
        $model = config("auth.providers.$provider.model");

        if (! $model) {
            $providers = config('auth.providers');
            $model = $providers[array_key_first($providers)]['model'];
        }

        return $model;
    }

    private function responseWithToken(string $token): array
    {
        $payload = JWTAuth::setToken($token)->getPayload();

        return [
            'token_type' => 'bearer',
            'access_token' => $token,
            'refresh_token' => $token,
            'expires_in' => config('jwt.ttl') * 60,
            'scope' => $payload->get('scope'),
            'resource_owner' => $payload->get('scope'),
            'resource_id' => $payload->get('sub'),
            'created_at' => Carbon::now(),
            'refresh_token_expires_in' => config('jwt.refresh_ttl') * 60,
        ];
    }
}
