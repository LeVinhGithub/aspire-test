<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('job_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('is_prefecture')->default(true)->nullable();
            $table->timestamps();
        });
        Schema::create('income_ranges', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('');
            $table->timestamps();

            $table->unique('name', 'index_unique_income_ranges_on_name');
        });
        Schema::create('school_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('');
            $table->timestamps();
        });
        Schema::create('management_experiences', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('occupation_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_occupation_types_on_name');
        });
        Schema::create('employment_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_employment_statuses_on_name');
        });
        Schema::create('career_direction_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_career_direction_groups_on_name');
        });
        Schema::create('passive_smoking_countermeasures', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_passive_smoking_countermeasures_on_name');
        });
        Schema::create('valued_competencies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_valued_competencies_on_name');
        });
        Schema::create('industry_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();

            $table->unique('name', 'index_unique_industry_groups_on_name');
        });
        Schema::create('industries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('');
            $table->unsignedBigInteger('industry_group_id');
            $table->timestamps();

            $table->unique('name', 'index_unique_industries_on_name');
            $table->foreign('industry_group_id', 'fk_industries_industry_groups_id')->references('id')->on('industry_groups')->onDelete('cascade');
        });
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->default('')->nullable();
            $table->string('furigana')->default('')->nullable();
            $table->string('phone_number')->default('')->nullable();
            $table->date('birthdate')->nullable();
            $table->unsignedBigInteger('location_id')->nullable();
            $table->string('address')->default('')->nullable();
            $table->unsignedBigInteger('income_range_id');
            $table->enum('availability', ['immediate', 'within_3_months', 'within_6_months', 'within_1_year', 'if_I_find_a_good_company', 'not_thinking_about_it_now'])->nullable();
            $table->string('description')->default('')->nullable();
            $table->unsignedBigInteger('management_experience_id');
            $table->string('encrypted_password')->default('');
            $table->string('email');
            $table->string('reset_password_token')->nullable();
            $table->datetime('reset_password_sent_at')->nullable();
            $table->datetime('remember_created_at')->nullable();
            $table->datetime('current_sign_in_at')->nullable();
            $table->datetime('last_sign_in_at')->nullable();
            $table->string('current_sign_in_ip')->nullable();
            $table->string('last_sign_in_ip')->nullable();
            $table->integer('sign_in_count')->default(0);
            $table->string('password')->nullable();
            $table->string('password_confirmation')->nullable();
            $table->datetime('locked_at')->nullable();
            $table->integer('failed_attempts')->default(0);
            $table->string('unlock_token')->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->string('confirmation_token')->nullable();
            $table->string('unconfirmed_email')->nullable();
            $table->datetime('confirmed_at')->nullable();
            $table->datetime('confirmation_sent_at')->nullable();
            $table->boolean('is_onboarded')->default(false)->nullable();
            $table->string('notes')->nullable();
            $table->string('current_company_name')->nullable();
            $table->string('current_company_department')->nullable();
            $table->string('current_company_position')->nullable();
            $table->integer('confirmation_email_resent_count')->default(0)->nullable();
            $table->integer('number_of_companies')->nullable();
            $table->boolean('is_suspended')->default(false)->nullable();
            $table->text('desired_info')->default('')->nullable();
            $table->enum('management_experience_years', ['years_0', 'years_1', 'years_2', 'years_3', 'years_4', 'years_5', 'years_6', 'years_7', 'years_8', 'years_9', 'years_10', 'years_10_more'])->nullable();
            $table->timestamps();

            $table->foreign('location_id', 'fk_applicants_locations_id')->references('id')->on('locations')->onDelete('cascade');
            $table->unique('email', 'index_unique_applicants_on_email');
        });
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location')->default('')->nullable();
            $table->string('launched_year')->default('')->nullable();
            $table->text('business_details')->default('')->nullable();
            $table->integer('number_of_employees')->default(1)->nullable();
            $table->unsignedBigInteger('industry_id');
            $table->text('mission')->default('')->nullable();
            $table->text('vision')->default('')->nullable();
            $table->text('value')->default('')->nullable();
            $table->text('representative_profile')->default('')->nullable();
            $table->enum('listing_classification', ['first_section_tokyo_stock', 'second_section_tokyo_stock', 'jasdaq_standart', 'jasdaq_growth', 'mothers', 'unlisted'])->nullable();
            $table->string('representative_name')->nullable();
            $table->string('slug');
            $table->string('capital')->nullable();
            $table->boolean('ipo')->default(false)->nullable();
            $table->string('business_id')->nullable();
            $table->string('name_furigana')->nullable();
            $table->timestamps();

            $table->unique('name', 'index_unique_companies_on_name');
            $table->foreign('industry_id', 'fk_companies_industries_id')->references('id')->on('industries')->onDelete('cascade');
        });
        Schema::create('applicant_languages', function (Blueprint $table) {
            $table->id();
            $table->enum('proficiency', ['Basic', 'Intermediate', 'Advanced', 'Native']);
            $table->unsignedBigInteger('language_id');
            $table->unsignedBigInteger('applicant_id');
            $table->string('other_language')->nullable();
            $table->timestamps();

            $table->foreign('language_id', 'fk_applicant_languages_languages_id')->references('id')->on('languages')->onDelete('cascade');
        });
        Schema::create('job_titles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('job_group_id');
            $table->timestamps();

            $table->foreign('job_group_id', 'fk_job_titles_job_groups_id')->references('id')->on('job_groups')->onDelete('cascade');
        });
        Schema::create('career_directions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('career_direction_group_id');
            $table->string('name');
            $table->timestamps();

            $table->foreign('career_direction_group_id', 'fk_career_directions_career_direction_groups_id')->references('id')->on('career_direction_groups')->onDelete('cascade');
            $table->unique('name', 'index_unique_career_directions_on_name');
        });
        Schema::create('applicant_schools', function (Blueprint $table) {
            $table->id();
            $table->date('graduation_date');
            $table->string('name')->default('');
            $table->string('degree')->nullable();
            $table->string('major')->nullable();
            $table->unsignedBigInteger('school_type_id');
            $table->unsignedBigInteger('applicant_id');
            $table->timestamps();

            $table->foreign('school_type_id', 'fk_applicant_schools_school_types_id')->references('id')->on('school_types')->onDelete('cascade');
        });
        Schema::create('company_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->string('full_name');
            $table->string('position')->nullable();
            $table->string('encrypted_password')->default('');
            $table->string('email');
            $table->string('reset_password_token')->nullable();
            $table->datetime('reset_password_sent_at')->nullable();
            $table->datetime('remember_created_at')->nullable();
            $table->datetime('current_sign_in_at')->nullable();
            $table->datetime('last_sign_in_at')->nullable();
            $table->string('current_sign_in_ip')->nullable();
            $table->string('last_sign_in_ip')->nullable();
            $table->integer('sign_in_count')->default(0);
            $table->string('password')->nullable();
            $table->string('password_confirmation')->nullable();
            $table->datetime('locked_at')->nullable();
            $table->integer('failed_attempts')->default(0);
            $table->string('unlock_token')->nullable();
            $table->enum('role', ['admin', 'standard']);
            $table->string('phone_number');
            $table->string('confirmation_token')->nullable();
            $table->string('unconfirmed_email')->nullable();
            $table->datetime('confirmed_at')->nullable();
            $table->datetime('confirmation_sent_at')->nullable();
            $table->timestamps();

            $table->foreign('company_id', 'fk_company_users_companies_id')->references('id')->on('companies')->onDelete('cascade');
            $table->unique('email', 'index_unique_company_users_on_email');
        });
        Schema::create('job_openings', function (Blueprint $table) {
            $table->id();
            $table->string('department')->default('');
            $table->string('position');
            $table->unsignedBigInteger('occupation_type_id');
            $table->unsignedBigInteger('location_id')->nullable();
            $table->unsignedBigInteger('income_range_id');
            $table->text('job_description')->default('');
            $table->boolean('is_remote_available')->default(false)->nullable();
            $table->unsignedBigInteger('employment_status_id');
            $table->unsignedBigInteger('company_id');
            $table->string('trial_period');
            $table->string('working_hours');
            $table->string('avg_overtime_hours')->default('');
            $table->text('trial_period_conditions')->default('');
            $table->string('workplace')->nullable();
            $table->text('qualification')->default('');
            $table->text('benefits')->default('')->nullable();
            $table->text('vacation')->default('');
            $table->text('bonus')->default('')->nullable();
            $table->text('promotion')->default('')->nullable();
            $table->text('appeal_point')->default('')->nullable();
            $table->unsignedBigInteger('passive_smoking_countermeasure_id');
            $table->unsignedBigInteger('career_direction_id');
            $table->unsignedBigInteger('job_title_id');
            $table->string('future_career_path')->default('')->nullable();
            $table->string('trending_keywords')->nullable();
            $table->boolean('business_trip_availability')->default(false)->nullable();
            $table->boolean('transfers')->default(false)->nullable();
            $table->date('publication_start_date');
            $table->date('publication_end_date')->nullable();
            $table->string('slug');
            $table->boolean('is_recommended')->default(false)->nullable();
            $table->enum('status', ['available', 'expired'])->nullable();
            $table->integer('pv')->nullable();
            $table->timestamps();

            $table->foreign('occupation_type_id', 'fk_job_openings_occupation_types_id')->references('id')->on('occupation_types')->onDelete('cascade');
            $table->unique('slug', 'index_unique_job_openings_on_slug');
        });
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedBigInteger('job_opening_id');
            $table->enum('status', ['interview_adjustment', 'primary_interview', 'secondary_interview', 'final_interview', 'unofficial_offer', 'joining_the_company', 'rejected', 'declined', 'not_entered']);
            $table->boolean('approached_by_scout')->default(false)->nullable();
            $table->boolean('user_name_disclosed')->default(false)->nullable();
            $table->timestamps();

            $table->foreign('applicant_id', 'fk_job_applications_applicants_id')->references('id')->on('applicants')->onDelete('cascade');
        });
        Schema::create('job_opening_favorites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_opening_id');
            $table->unsignedBigInteger('applicant_id');
            $table->timestamps();

            $table->foreign('job_opening_id', 'fk_job_opening_favorites_job_openings_id')->references('id')->on('job_openings')->onDelete('cascade');
        });
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('applicant_id');
            $table->text('text')->default('')->nullable();
            $table->integer('reply_to_message_id')->nullable();
            $table->unsignedBigInteger('company_id');
            $table->boolean('is_from_applicant')->default(false)->nullable();
            $table->boolean('is_read')->default(false)->nullable();
            $table->timestamps();

            $table->foreign('applicant_id', 'fk_messages_applicants_id')->references('id')->on('applicants')->onDelete('cascade');
            $table->index('reply_to_message_id', 'index_messages_on_reply_to_message_id');
        });
        Schema::create('applicant_industries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('industry_id');
            $table->unsignedBigInteger('applicant_id');
            $table->timestamps();

            $table->foreign('industry_id', 'fk_applicant_industries_industries_id')->references('id')->on('industries')->onDelete('cascade');
        });
        Schema::create('job_opening_valued_competencies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_opening_id');
            $table->unsignedBigInteger('valued_competency_id');
            $table->timestamps();

            $table->foreign('job_opening_id', 'fk_job_opening_valued_competencies_job_openings_id')->references('id')->on('job_openings')->onDelete('cascade');
        });
        Schema::create('job_experiences', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedBigInteger('job_title_id');
            $table->timestamps();

            $table->foreign('applicant_id', 'fk_job_experiences_applicants_id')->references('id')->on('applicants')->onDelete('cascade');
        });
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('applicant_id');
            $table->enum('skill_type', ['skill', 'qualification'])->nullable();
            $table->timestamps();

            $table->unique('name', 'index_unique_skills_on_name');
            $table->foreign('applicant_id', 'fk_skills_applicants_id')->references('id')->on('applicants')->onDelete('cascade');
        });
        Schema::create('restrictions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('applicant_id');
            $table->enum('reason', ['Other', 'HarrasingVandalism', 'SelectionUnmatched']);
            $table->timestamps();

            $table->foreign('company_id', 'fk_restrictions_companies_id')->references('id')->on('companies')->onDelete('cascade');
        });
        Schema::create('company_employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->string('full_name');
            $table->string('profile')->nullable();
            $table->boolean('is_high_rank_employee')->default(false)->nullable();
            $table->timestamps();

            $table->foreign('company_id', 'fk_company_employees_companies_id')->references('id')->on('companies')->onDelete('cascade');
        });
        Schema::create('recruitment_notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedBigInteger('company_id');
            $table->string('note')->nullable();
            $table->timestamps();

            $table->foreign('applicant_id', 'fk_recruitment_notes_applicants_id')->references('id')->on('applicants')->onDelete('cascade');
        });
        Schema::create('scout_templates', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('template_text')->nullable();
            $table->unsignedBigInteger('company_id');
            $table->timestamps();

            $table->foreign('company_id', 'fk_scout_templates_companies_id')->references('id')->on('companies')->onDelete('cascade');
        });
        Schema::create('target_lists', function (Blueprint $table) {
            $table->id();
            $table->string('title')->default('');
            $table->unsignedBigInteger('company_id');
            $table->timestamps();

            $table->foreign('company_id', 'fk_target_lists_companies_id')->references('id')->on('companies')->onDelete('cascade');
        });
        Schema::create('target_list_applicants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('target_list_id')->nullable();
            $table->unsignedBigInteger('applicant_id')->nullable();
            $table->timestamps();

            $table->foreign('target_list_id', 'fk_target_list_applicants_target_lists_id')->references('id')->on('target_lists')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('target_list_applicants', function (Blueprint $table) {
            $table->dropForeign('fk_target_list_applicants_target_lists_id');
        });
        Schema::table('target_lists', function (Blueprint $table) {
            $table->dropForeign('fk_target_lists_companies_id');
        });
        Schema::table('scout_templates', function (Blueprint $table) {
            $table->dropForeign('fk_scout_templates_companies_id');
        });
        Schema::table('recruitment_notes', function (Blueprint $table) {
            $table->dropForeign('fk_recruitment_notes_applicants_id');
        });
        Schema::table('company_employees', function (Blueprint $table) {
            $table->dropForeign('fk_company_employees_companies_id');
        });
        Schema::table('restrictions', function (Blueprint $table) {
            $table->dropForeign('fk_restrictions_companies_id');
        });
        Schema::table('skills', function (Blueprint $table) {
            $table->dropUnique('index_unique_skills_on_name');
            $table->dropForeign('fk_skills_applicants_id');
        });
        Schema::table('job_experiences', function (Blueprint $table) {
            $table->dropForeign('fk_job_experiences_applicants_id');
        });
        Schema::table('job_opening_valued_competencies', function (Blueprint $table) {
            $table->dropForeign('fk_job_opening_valued_competencies_job_openings_id');
        });
        Schema::table('applicant_industries', function (Blueprint $table) {
            $table->dropForeign('fk_applicant_industries_industries_id');
        });
        Schema::table('messages', function (Blueprint $table) {
            $table->dropForeign('fk_messages_applicants_id');
            $table->dropIndex('index_messages_on_reply_to_message_id');
        });
        Schema::table('job_opening_favorites', function (Blueprint $table) {
            $table->dropForeign('fk_job_opening_favorites_job_openings_id');
        });
        Schema::table('job_applications', function (Blueprint $table) {
            $table->dropForeign('fk_job_applications_applicants_id');
        });
        Schema::table('job_openings', function (Blueprint $table) {
            $table->dropForeign('fk_job_openings_occupation_types_id');
            $table->dropUnique('index_unique_job_openings_on_slug');
        });
        Schema::table('company_users', function (Blueprint $table) {
            $table->dropForeign('fk_company_users_companies_id');
            $table->dropUnique('index_unique_company_users_on_email');
        });
        Schema::table('applicant_schools', function (Blueprint $table) {
            $table->dropForeign('fk_applicant_schools_school_types_id');
        });
        Schema::table('career_directions', function (Blueprint $table) {
            $table->dropForeign('fk_career_directions_career_direction_groups_id');
            $table->dropUnique('index_unique_career_directions_on_name');
        });
        Schema::table('job_titles', function (Blueprint $table) {
            $table->dropForeign('fk_job_titles_job_groups_id');
        });
        Schema::table('applicant_languages', function (Blueprint $table) {
            $table->dropForeign('fk_applicant_languages_languages_id');
        });
        Schema::table('companies', function (Blueprint $table) {
            $table->dropUnique('index_unique_companies_on_name');
            $table->dropForeign('fk_companies_industries_id');
        });
        Schema::table('applicants', function (Blueprint $table) {
            $table->dropForeign('fk_applicants_locations_id');
            $table->dropUnique('index_unique_applicants_on_email');
        });
        Schema::table('industries', function (Blueprint $table) {
            $table->dropUnique('index_unique_industries_on_name');
            $table->dropForeign('fk_industries_industry_groups_id');
        });
        Schema::table('industry_groups', function (Blueprint $table) {
            $table->dropUnique('index_unique_industry_groups_on_name');
        });
        Schema::table('valued_competencies', function (Blueprint $table) {
            $table->dropUnique('index_unique_valued_competencies_on_name');
        });
        Schema::table('passive_smoking_countermeasures', function (Blueprint $table) {
            $table->dropUnique('index_unique_passive_smoking_countermeasures_on_name');
        });
        Schema::table('career_direction_groups', function (Blueprint $table) {
            $table->dropUnique('index_unique_career_direction_groups_on_name');
        });
        Schema::table('employment_statuses', function (Blueprint $table) {
            $table->dropUnique('index_unique_employment_statuses_on_name');
        });
        Schema::table('occupation_types', function (Blueprint $table) {
            $table->dropUnique('index_unique_occupation_types_on_name');
        });
        Schema::table('income_ranges', function (Blueprint $table) {
            $table->dropUnique('index_unique_income_ranges_on_name');
        });

        Schema::dropIfExists('target_list_applicants');
        Schema::dropIfExists('target_lists');
        Schema::dropIfExists('scout_templates');
        Schema::dropIfExists('recruitment_notes');
        Schema::dropIfExists('company_employees');
        Schema::dropIfExists('restrictions');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('job_experiences');
        Schema::dropIfExists('job_opening_valued_competencies');
        Schema::dropIfExists('applicant_industries');
        Schema::dropIfExists('messages');
        Schema::dropIfExists('job_opening_favorites');
        Schema::dropIfExists('job_applications');
        Schema::dropIfExists('job_openings');
        Schema::dropIfExists('company_users');
        Schema::dropIfExists('applicant_schools');
        Schema::dropIfExists('career_directions');
        Schema::dropIfExists('job_titles');
        Schema::dropIfExists('applicant_languages');
        Schema::dropIfExists('companies');
        Schema::dropIfExists('applicants');
        Schema::dropIfExists('industries');
        Schema::dropIfExists('industry_groups');
        Schema::dropIfExists('valued_competencies');
        Schema::dropIfExists('passive_smoking_countermeasures');
        Schema::dropIfExists('career_direction_groups');
        Schema::dropIfExists('employment_statuses');
        Schema::dropIfExists('occupation_types');
        Schema::dropIfExists('management_experiences');
        Schema::dropIfExists('school_types');
        Schema::dropIfExists('income_ranges');
        Schema::dropIfExists('locations');
        Schema::dropIfExists('job_groups');
        Schema::dropIfExists('languages');
    }
};
