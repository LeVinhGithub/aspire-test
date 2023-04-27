class ChangeSchemaV12 < ActiveRecord::Migration[6.0]
  def change
    create_table :target_lists do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    add_reference :job_applications, :target_lists, foreign_key: true

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
