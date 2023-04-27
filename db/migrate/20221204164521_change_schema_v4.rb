class ChangeSchemaV4 < ActiveRecord::Migration[6.0]
  def change
    create_table :industry_groups do |t|
      t.string :name, default: '', null: false

      t.timestamps null: false
    end

    change_column_null :companies, :representative_profile, false

    remove_reference :job_experiences, :applicants, foreign_key: true
    remove_reference :applicants, :income_ranges, foreign_key: true
    remove_reference :applicants, :management_experiences, foreign_key: true
    remove_reference :companies, :industries, foreign_key: true

    add_reference :industries, :industry_groups, foreign_key: true

    add_index :industry_groups, :name, unique: true
    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
