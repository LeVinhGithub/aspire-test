class ChangeSchemaV2 < ActiveRecord::Migration[6.0]
  def change
  
  
    create_table :test2s do |t|
      t.string :confirmation_token
      t.datetime :remember_created_at
      t.string :reset_password_token
      t.string :unlock_token
      t.datetime :current_sign_in_at
      t.datetime :locked_at
      t.datetime :last_sign_in_at
      t.datetime :confirmation_sent_at
      t.string :encrypted_password, default: '', null: false
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :reset_password_sent_at
      t.integer :failed_attempts, default: 0, null: false
      t.string :password_confirmation
      t.string :email, default: '', null: false
      t.string :password
      t.string :unconfirmed_email
      t.string :last_sign_in_ip
      t.datetime :confirmed_at
      t.string :current_sign_in_ip
      t.timestamps null: false
    end
  
    add_column :users, :test2s_count, :integer, default: 0
  
    add_reference :test2s, :user, foreign_key: true
    add_index :test2s, :reset_password_token, unique: true
    add_index :test2s, :confirmation_token, unique: true
    add_index :test2s, :unlock_token, unique: true
    add_index :test2s, :email, unique: true
    add_index :test2s, :unconfirmed_email, unique: true
  end
end
