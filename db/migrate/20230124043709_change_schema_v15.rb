class ChangeSchemaV15 < ActiveRecord::Migration[6.0]
  def change
    add_column :applicants, :management_experience_years, :integer, default: 0

    add_column :applicants, :desired_info, :text

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
