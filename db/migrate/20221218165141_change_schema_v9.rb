class ChangeSchemaV9 < ActiveRecord::Migration[6.0]
  def change
    add_column :applicants, :confirmation_email_resent_count, :integer, default: 0

    add_column :applicants, :current_company_department, :string

    add_column :applicants, :current_company_name, :string

    add_column :applicants, :current_company_position, :string

    add_column :skills, :skill_type, :integer, default: 0

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
