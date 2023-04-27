<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ApplicantEmailRegistrationRequest;
use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Http\Requests\Auth\CompanyUserEmailRegistrationRequest;
use App\Http\Requests\Auth\GrantTokenRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\RevokeTokenRequest;
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

    public function applicantResetPassword(ResetPasswordRequest $request)
    {
        return $this->authService->resetPassword($request->validated(), 'applicants');
    }

    public function companyUserResetPassword(ResetPasswordRequest $request)
    {
        return $this->authService->resetPassword($request->validated(), 'company_users');
    }

    public function applicantVerifyResetPassword(VerifyResetPasswordRequest $request)
    {
        return $this->authService->verifyResetPassword($request->validated(), 'applicants');
    }

    public function companyUserVerifyResetPassword(VerifyResetPasswordRequest $request)
    {
        return $this->authService->verifyResetPassword($request->validated(), 'company_users');
    }

    public function applicantEmailRegistration(ApplicantEmailRegistrationRequest $request)
    {
        return $this->authService->applicantEmailRegistration($request->validated());
    }

    public function companyUserEmailRegistration(CompanyUserEmailRegistrationRequest $request)
    {
        return $this->authService->companyUserEmailRegistration($request->validated());
    }

    public function applicantChangePassword(ChangePasswordRequest $request)
    {
        return $this->authService->changePassword($request->validated());
    }

    public function companyUserChangePassword(ChangePasswordRequest $request)
    {
        return $this->authService->changePassword($request->validated());
    }

    public function applicantVerifyEmail(VerifyEmailRequest $request)
    {
        return $this->authService->verifyEmail($request->validated(), 'applicants');
    }

    public function companyUserVerifyEmail(VerifyEmailRequest $request)
    {
        return $this->authService->verifyEmail($request->validated(), 'company_users');
    }

    public function applicantUnlock(UnlockRequest $request)
    {
        return $this->authService->unlock($request->validated(), 'applicant');
    }

    public function companyUserUnlock(UnlockRequest $request)
    {
        return $this->authService->unlock($request->validated(), 'company_user');
    }
}
