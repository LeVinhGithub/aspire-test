class ChangeSchemaV3 < ActiveRecord::Migration[6.0]
  def change
    create_table :restrictions do |t|
      t.integer :reason, default: 0, null: false

      t.timestamps null: false
    end

    create_table :recruitment_notes do |t|
      t.string :note

      t.timestamps null: false
    end

    create_table :company_employees do |t|
      t.string :full_name, default: '', null: false

      t.string :profile

      t.boolean :is_high_rank_employee, default: false

      t.timestamps null: false
    end

    add_column :company_users, :confirmation_token, :string

    add_column :applicants, :confirmation_sent_at, :datetime

    add_column :applicants, :confirmation_token, :string

    add_column :applicants, :unconfirmed_email, :string

    add_column :job_applications, :approached_by_scout, :boolean, default: false

    add_column :company_users, :phone_number, :string, default: '', null: false

    add_column :applicants, :confirmed_at, :datetime

    add_column :company_users, :unconfirmed_email, :string

    add_column :company_users, :confirmation_sent_at, :datetime

    add_column :company_users, :confirmed_at, :datetime

    add_column :job_openings, :is_recommended, :boolean, default: false

    add_column :job_openings, :slug, :string, default: '', null: false

    add_column :companies, :slug, :string, default: '', null: false

    add_column :companies, :capital, :string

    rename_column :job_openings, :deployment, :department

    remove_column :companies, :listing_classification, :string
    add_column :companies, :listing_classification, :integer

    remove_column :companies, :representative_photo, :string
    add_column :companies, :representative_photo, :file

    remove_column :companies, :ipo, :string
    add_column :companies, :ipo, :boolean

    change_column_default :companies, ipo, false
    change_column_default :job_applications, status, 0

    add_reference :recruitment_notes, :applicants, foreign_key: true

    add_reference :restrictions, :applicants, foreign_key: true

    add_reference :company_employees, :companies, foreign_key: true

    add_reference :restrictions, :companies, foreign_key: true

    add_reference :recruitment_notes, :companies, foreign_key: true

    add_index :company_users, :phone_number, unique: true
    add_index :company_users, :confirmation_token, unique: true
    add_index :company_users, :unconfirmed_email, unique: true
    add_index :applicants, :unconfirmed_email, unique: true
    add_index :applicants, :confirmation_token, unique: true

    add_index :companies, :slug, unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
