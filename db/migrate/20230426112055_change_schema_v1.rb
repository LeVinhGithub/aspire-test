class ChangeSchemaV1 < ActiveRecord::Migration[6.0]
  def change
    create_table :testings do |t|
      t.datetime :current_sign_in_at

      t.string :email, default: '', null: false

      t.integer :sign_in_count, default: 0, null: false

      t.datetime :locked_at

      t.datetime :last_sign_in_at

      t.datetime :reset_password_sent_at

      t.string :password

      t.string :encrypted_password, default: '', null: false

      t.string :confirmation_token

      t.string :unconfirmed_email

      t.integer :failed_attempts, default: 0, null: false

      t.string :unlock_token

      t.string :reset_password_token

      t.datetime :confirmation_sent_at

      t.datetime :remember_created_at

      t.string :current_sign_in_ip

      t.string :last_sign_in_ip

      t.string :password_confirmation

      t.datetime :confirmed_at

      t.timestamps null: false
    end

    add_index :testings, :unconfirmed_email, unique: true
    add_index :testings, :confirmation_token, unique: true
    add_index :testings, :email, unique: true
    add_index :testings, :unlock_token, unique: true
    add_index :testings, :reset_password_token, unique: true
  end
end
