class ChangeSchemaV13 < ActiveRecord::Migration[6.0]
  def change
    create_table :target_list_applicants do |t|
      t.timestamps null: false
    end

    add_column :applicants, :is_suspended, :boolean, default: false

    rename_column :target_lists, :name, :title

    add_reference :target_list_applicants, :target_lists, foreign_key: true

    add_reference :target_lists, :companies, foreign_key: true

    add_reference :target_list_applicants, :applicants, foreign_key: true

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
