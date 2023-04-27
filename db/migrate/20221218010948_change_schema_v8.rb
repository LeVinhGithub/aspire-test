class ChangeSchemaV8 < ActiveRecord::Migration[6.0]
  def change
    add_column :applicant_languages, :other_language, :string

    add_column :applicants, :notes, :string

    add_column :applicants, :is_onboarded, :boolean, default: false

    remove_reference :applicant_languages, :languages, foreign_key: true
    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
