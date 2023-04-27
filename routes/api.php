<?php

use App\Http\Controllers\Api\ApplicantController;
use App\Http\Controllers\Api\ApplicantIndustryController;
use App\Http\Controllers\Api\ApplicantLanguageController;
use App\Http\Controllers\Api\ApplicantSchoolController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CareerDirectionGroupController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\CompanyEmployeeController;
use App\Http\Controllers\Api\CompanyUserController;
use App\Http\Controllers\Api\EmploymentStatusController;
use App\Http\Controllers\Api\IncomeRangeController;
use App\Http\Controllers\Api\IndustryGroupController;
use App\Http\Controllers\Api\JobApplicationController;
use App\Http\Controllers\Api\JobExperienceController;
use App\Http\Controllers\Api\JobGroupController;
use App\Http\Controllers\Api\JobOpeningController;
use App\Http\Controllers\Api\JobOpeningFavoriteController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\ManagementExperienceController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\OccupationTypeController;
use App\Http\Controllers\Api\PassiveSmokingCountermeasureController;
use App\Http\Controllers\Api\RecruitmentNoteController;
use App\Http\Controllers\Api\RestrictionController;
use App\Http\Controllers\Api\SchoolTypeController;
use App\Http\Controllers\Api\ScoutTemplateController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\TargetListApplicantController;
use App\Http\Controllers\Api\TargetListController;
use App\Http\Controllers\Api\ValuedCompetencyController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('/applicants_reset_password_requests', 'applicantResetPassword');
    Route::post('/company_users_reset_password_requests', 'companyUserResetPassword');
    Route::post('/applicants_verify_reset_password_requests', 'applicantVerifyResetPassword');
    Route::post('/company_users_verify_reset_password_requests', 'companyUserVerifyResetPassword');
    Route::post('/applicants_registrations', 'applicantEmailRegistration');
    Route::post('/company_users_registrations', 'companyUserEmailRegistration');
    Route::post('/applicants_verify_confirmation_token', 'applicantVerifyEmail');
    Route::post('/company_users_verify_confirmation_token', 'companyUserVerifyEmail');
    Route::post('api/applicant_unlock', 'applicantUnlock');
    Route::post('api/company_user_unlock', 'companyUserUnlock');
    Route::middleware(['auth:applicants'])->group(function () {
        Route::post('/applicants_passwords', 'applicantChangePassword');
    });
    Route::middleware(['auth:company_users'])->group(function () {
        Route::post('/company_users_passwords', 'companyUserChangePassword');
    });
});

Route::controller(ApplicantController::class)->group(function () {
    Route::get('/applicants', 'filter');
    Route::get('/applicants/{id}', 'show');
    Route::post('/applicants', 'create');
    Route::post('/applicants/{id}', 'update');
    Route::delete('/applicants/{id}', 'delete');
});
Route::controller(CompanyController::class)->group(function () {
    Route::get('/companies', 'filter');
    Route::get('/companies/{id}', 'show');
    Route::post('/companies', 'create');
    Route::post('/companies/{id}', 'update');
    Route::delete('/companies/{id}', 'delete');
});
Route::controller(LanguageController::class)->group(function () {
    Route::get('/languages', 'filter');
});
Route::controller(ApplicantLanguageController::class)->group(function () {
    Route::get('/applicant_languages', 'filter');
    Route::post('/applicant_languages', 'create');
    Route::put('/applicant_languages/{id}', 'update');
    Route::delete('/applicant_languages/{id}', 'delete');
});
Route::controller(JobGroupController::class)->group(function () {
    Route::get('/job_groups', 'filter');
});
Route::controller(IncomeRangeController::class)->group(function () {
    Route::get('/income_ranges', 'filter');
});
Route::controller(ApplicantSchoolController::class)->group(function () {
    Route::get('/applicant_schools', 'filter');
    Route::post('/applicant_schools', 'create');
    Route::put('/applicant_schools/{id}', 'update');
    Route::delete('/applicant_schools/{id}', 'delete');
});
Route::controller(SchoolTypeController::class)->group(function () {
    Route::get('/school_types', 'filter');
});
Route::controller(ManagementExperienceController::class)->group(function () {
    Route::get('/management_experiences', 'filter');
});
Route::controller(JobOpeningController::class)->group(function () {
    Route::get('/job_openings', 'filter');
    Route::get('/job_openings/{id}', 'show');
    Route::post('/job_openings', 'create');
    Route::post('/job_openings/{id}', 'update');
    Route::delete('/job_openings/{id}', 'delete');
});
Route::controller(OccupationTypeController::class)->group(function () {
    Route::get('/occupation_types', 'filter');
});
Route::controller(EmploymentStatusController::class)->group(function () {
    Route::get('/employment_statuses', 'filter');
});
Route::controller(CareerDirectionGroupController::class)->group(function () {
    Route::get('/career_direction_groups', 'filter');
});
Route::controller(ValuedCompetencyController::class)->group(function () {
    Route::get('/valued_competencies', 'filter');
});
Route::controller(PassiveSmokingCountermeasureController::class)->group(function () {
    Route::get('/passive_smoking_countermeasures', 'filter');
});
Route::controller(JobApplicationController::class)->group(function () {
    Route::get('/job_applications', 'filter');
    Route::get('/job_applications/{id}', 'show');
    Route::post('/job_applications', 'create');
    Route::put('/job_applications/{id}', 'update');
    Route::delete('/job_applications/{id}', 'delete');
});
Route::controller(JobOpeningFavoriteController::class)->group(function () {
    Route::get('/job_opening_favorites', 'filter');
    Route::get('/job_opening_favorites/{id}', 'show');
    Route::post('/job_opening_favorites', 'create');
    Route::put('/job_opening_favorites/{id}', 'update');
    Route::delete('/job_opening_favorites/{id}', 'delete');
});
Route::controller(MessageController::class)->group(function () {
    Route::get('/messages', 'filter');
    Route::get('/messages/{id}', 'show');
    Route::post('/messages', 'create');
    Route::post('/messages/{id}', 'update');
    Route::delete('/messages/{id}', 'delete');
});
Route::controller(ApplicantIndustryController::class)->group(function () {
    Route::get('/applicant_industries', 'filter');
    Route::post('/applicant_industries', 'create');
    Route::put('/applicant_industries/{id}', 'update');
    Route::delete('/applicant_industries/{id}', 'delete');
});
Route::controller(LocationController::class)->group(function () {
    Route::get('/locations', 'filter');
});
Route::controller(CompanyUserController::class)->group(function () {
    Route::get('/company_users', 'filter');
    Route::get('/company_users/{id}', 'show');
    Route::post('/company_users', 'create');
    Route::post('/company_users/{id}', 'update');
    Route::delete('/company_users/{id}', 'delete');
});
Route::controller(JobExperienceController::class)->group(function () {
    Route::get('/job_experiences', 'filter');
    Route::post('/job_experiences', 'create');
    Route::put('/job_experiences/{id}', 'update');
    Route::delete('/job_experiences/{id}', 'delete');
});
Route::controller(SkillController::class)->group(function () {
    Route::get('/skills', 'filter');
    Route::post('/skills', 'create');
    Route::put('/skills/{id}', 'update');
    Route::delete('/skills/{id}', 'delete');
});
Route::controller(RestrictionController::class)->group(function () {
    Route::get('/restrictions', 'filter');
    Route::get('/restrictions/{id}', 'show');
    Route::post('/restrictions', 'create');
    Route::put('/restrictions/{id}', 'update');
    Route::delete('/restrictions/{id}', 'delete');
});
Route::controller(CompanyEmployeeController::class)->group(function () {
    Route::get('/company_employees/{id}', 'show');
    Route::post('/company_employees', 'create');
    Route::post('/company_employees/{id}', 'update');
    Route::delete('/company_employees/{id}', 'delete');
    Route::middleware(['auth:company_users'])->group(function () {
        Route::get('/company_employees', 'filter');
    });
});
Route::controller(RecruitmentNoteController::class)->group(function () {
    Route::get('/recruitment_notes', 'filter');
    Route::post('/recruitment_notes', 'create');
    Route::put('/recruitment_notes/{id}', 'update');
});
Route::controller(IndustryGroupController::class)->group(function () {
    Route::get('/industry_groups', 'filter');
});
Route::controller(ScoutTemplateController::class)->group(function () {
    Route::get('/scout_templates', 'filter');
    Route::get('/scout_templates/{id}', 'show');
    Route::post('/scout_templates', 'create');
    Route::put('/scout_templates/{id}', 'update');
    Route::delete('/scout_templates/{id}', 'delete');
});
Route::controller(TargetListController::class)->group(function () {
    Route::get('/target_lists', 'filter');
    Route::get('/target_lists/{id}', 'show');
    Route::post('/target_lists', 'create');
    Route::put('/target_lists/{id}', 'update');
    Route::delete('/target_lists/{id}', 'delete');
});
Route::controller(TargetListApplicantController::class)->group(function () {
    Route::post('/target_list_applicants', 'create');
    Route::delete('/target_list_applicants/{id}', 'delete');
});
