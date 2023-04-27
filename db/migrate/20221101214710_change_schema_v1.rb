class ChangeSchemaV1 < ActiveRecord::Migration[6.0]
  def change
    create_table :company_users do |t|
      t.string :reset_password_token

      t.string :current_sign_in_ip

      t.string :position

      t.string :email, default: '', null: false

      t.datetime :reset_password_sent_at

      t.integer :role, default: 0, null: false

      t.string :password

      t.string :last_sign_in_ip

      t.integer :sign_in_count, default: 0, null: false

      t.datetime :remember_created_at

      t.string :password_confirmation

      t.datetime :locked_at

      t.string :encrypted_password, default: '', null: false

      t.string :unlock_token

      t.integer :failed_attempts, default: 0, null: false

      t.datetime :last_sign_in_at

      t.datetime :current_sign_in_at

      t.string :full_name, default: '', null: false

      t.timestamps null: false
    end

    create_table :companies do |t|
      t.string :launched_year

      t.text :representative_profile, null: false

      t.string :name, default: '', null: false

      t.string :representative_photo

      t.text :mission

      t.string :listing_classification

      t.text :business_details

      t.string :location

      t.text :vision

      t.string :ipo

      t.string :representative_name

      t.text :value

      t.integer :number_of_employees, default: 1

      t.timestamps null: false
    end

    create_table :job_openings do |t|
      t.text :qualification, null: false

      t.string :trial_period, default: '', null: false

      t.string :working_hours, default: '', null: false

      t.string :trending_keywords

      t.boolean :is_remote_available, default: false

      t.boolean :transfers, default: false

      t.boolean :business_trip_availability, default: false

      t.text :vacation, null: false

      t.string :deployment, default: '', null: false

      t.text :trial_period_conditions, null: false

      t.text :benefits

      t.string :avg_overtime_hours, default: '', null: false

      t.text :job_description, null: false

      t.text :bonus

      t.string :workplace

      t.string :future_career_path

      t.date :publication_start_date, null: false

      t.text :promotion

      t.string :position, default: '', null: false

      t.text :appeal_point

      t.date :publication_end_date

      t.timestamps null: false
    end

    create_table :job_applications do |t|
      t.integer :status, default: 0, null: false

      t.timestamps null: false
    end

    create_table :applicants do |t|
      t.integer :availability

      t.datetime :reset_password_sent_at

      t.string :description

      t.string :password_confirmation

      t.string :encrypted_password, default: '', null: false

      t.string :current_sign_in_ip

      t.integer :gender

      t.string :address

      t.datetime :remember_created_at

      t.datetime :locked_at

      t.datetime :current_sign_in_at

      t.datetime :last_sign_in_at

      t.string :last_sign_in_ip

      t.date :birthdate

      t.string :reset_password_token

      t.string :full_name

      t.integer :failed_attempts, default: 0, null: false

      t.string :password

      t.string :unlock_token

      t.string :phone_number

      t.string :furigana

      t.string :email, default: '', null: false

      t.integer :sign_in_count, default: 0, null: false

      t.timestamps null: false
    end

    create_table :applicant_industries do |t|
      t.boolean :is_desired

      t.timestamps null: false
    end

    create_table :industries do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :applicant_schools do |t|
      t.string :major

      t.string :name, default: '', null: false

      t.string :degree

      t.date :graduation_date, null: false

      t.timestamps null: false
    end

    create_table :school_types do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :applicant_languages do |t|
      t.integer :proficiency, default: 0, null: false

      t.timestamps null: false
    end

    create_table :languages do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :messages do |t|
      t.text :text

      t.integer :reply_to_message_id

      t.timestamps null: false
    end

    create_table :job_experiences do |t|
      t.date :end_date

      t.string :company_name, default: '', null: false

      t.date :start_date, null: false

      t.timestamps null: false
    end

    create_table :job_titles do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :job_groups do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :skills do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :job_opening_favorites do |t|
      t.timestamps null: false
    end

    create_table :locations do |t|
      t.string :name, default: '', null: false

      t.boolean :is_prefecture, default: true

      t.timestamps null: false
    end

    create_table :income_ranges do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :management_experiences do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :job_opening_valued_competencies do |t|
      t.timestamps null: false
    end

    create_table :valued_competencies do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :occupation_types do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :employment_statuses do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :passive_smoking_countermeasures do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :career_directions do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    create_table :career_direction_groups do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    add_reference :company_users, :companies, foreign_key: true

    add_reference :messages, :companies, foreign_key: true

    add_reference :job_openings, :companies, foreign_key: true

    add_reference :job_opening_favorites, :job_openings, foreign_key: true

    add_reference :job_applications, :job_openings, foreign_key: true

    add_reference :job_opening_valued_competencies, :job_openings, foreign_key: true

    add_reference :applicant_industries, :applicants, foreign_key: true

    add_reference :applicant_schools, :applicants, foreign_key: true

    add_reference :applicant_languages, :applicants, foreign_key: true

    add_reference :messages, :applicants, foreign_key: true

    add_reference :job_applications, :applicants, foreign_key: true

    add_reference :job_experiences, :applicants, foreign_key: true

    add_reference :skills, :applicants, foreign_key: true

    add_reference :job_opening_favorites, :applicants, foreign_key: true

    add_reference :companies, :industries, foreign_key: true

    add_reference :applicant_industries, :industries, foreign_key: true

    add_reference :applicant_schools, :school_types, foreign_key: true

    add_reference :applicant_languages, :languages, foreign_key: true

    add_reference :job_openings, :job_titles, foreign_key: true

    add_reference :job_experiences, :job_titles, foreign_key: true

    add_reference :job_titles, :job_groups, foreign_key: true

    add_reference :applicants, :locations, foreign_key: true

    add_reference :job_openings, :locations, foreign_key: true

    add_reference :applicants, :income_ranges, foreign_key: true

    add_reference :job_openings, :income_ranges, foreign_key: true

    add_reference :applicants, :management_experiences, foreign_key: true

    add_reference :job_opening_valued_competencies, :valued_competencies, foreign_key: true

    add_reference :job_openings, :occupation_types, foreign_key: true

    add_reference :job_openings, :employment_statuses, foreign_key: true

    add_reference :job_openings, :passive_smoking_countermeasures, foreign_key: true

    add_reference :job_openings, :career_directions, foreign_key: true

    add_reference :career_directions, :career_direction_groups, foreign_key: true

    add_index :company_users, :reset_password_token, unique: true
    add_index :company_users, :email, unique: true
    add_index :company_users, :unlock_token, unique: true
    add_index :companies, :name, unique: true
    add_index :applicants, :reset_password_token, unique: true
    add_index :applicants, :unlock_token, unique: true
    add_index :applicants, :email, unique: true
    add_index :industries, :name, unique: true
    add_index :skills, :name, unique: true
    add_index :income_ranges, :name, unique: true
    add_index :valued_competencies, :name, unique: true
    add_index :occupation_types, :name, unique: true
    add_index :employment_statuses, :name, unique: true
    add_index :passive_smoking_countermeasures, :name, unique: true
    add_index :career_directions, :name, unique: true
    add_index :career_direction_groups, :name, unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
