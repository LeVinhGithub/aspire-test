<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Http\Requests\Auth\GrantTokenRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\RevokeTokenRequest;
use App\Http\Requests\Auth\TestingEmailRegistrationRequest;
use App\Http\Requests\Auth\UnlockRequest;
use App\Http\Requests\Auth\VerifyEmailRequest;
use App\Http\Requests\Auth\VerifyResetPasswordRequest;
use App\Services\AuthService;
use Symfony\Component\HttpFoundation\JsonResponse;

class AuthController extends Controller
{
    protected AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function token(GrantTokenRequest $request): JsonResponse
    {
        $token = $this->authService->grantToken($request->validated());

        return response()->json($token);
    }

    public function revoke(RevokeTokenRequest $request)
    {
        $this->authService->revoke($request->validated());

        return response()->json([]);
    }

    public function testingResetPassword(ResetPasswordRequest $request)
    {
        return $this->authService->resetPassword($request->validated(), 'testings');
    }

    public function testingVerifyResetPassword(VerifyResetPasswordRequest $request)
    {
        return $this->authService->verifyResetPassword($request->validated(), 'testings');
    }

    public function testingEmailRegistration(TestingEmailRegistrationRequest $request)
    {
        return $this->authService->testingEmailRegistration($request->validated());
    }

    public function testingChangePassword(ChangePasswordRequest $request)
    {
        return $this->authService->changePassword($request->validated());
    }

    public function testingVerifyEmail(VerifyEmailRequest $request)
    {
        return $this->authService->verifyEmail($request->validated(), 'testings');
    }

    public function testingUnlock(UnlockRequest $request)
    {
        return $this->authService->unlock($request->validated(), 'testing');
    }
}
