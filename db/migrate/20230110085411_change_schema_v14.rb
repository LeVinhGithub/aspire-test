class ChangeSchemaV14 < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :is_from_applicant, :boolean, default: false

    add_column :messages, :is_read, :boolean, default: false

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
