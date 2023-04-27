class ChangeSchemaV11 < ActiveRecord::Migration[6.0]
  def change
    create_table :scout_templates do |t|
      t.text :template_text

      t.string :title

      t.timestamps null: false
    end

    add_column :job_openings, :status, :integer, default: 0

    add_column :job_openings, :pv, :integer, comment: 'page views'

    add_column :job_applications, :user_name_disclosed, :boolean, default: false

    add_reference :scout_templates, :companies, foreign_key: true

    remove_index :job_openings, %i[slug], unique: true

    add_index :job_openings, :slug, unique: true

    remove_index :companies, %i[slug], unique: true

    add_index :companies, :slug, unique: true

    remove_index :messages, %i[reply_to_message_id], unique: true

    add_index :messages, :reply_to_message_id, unique: true
  end
end
