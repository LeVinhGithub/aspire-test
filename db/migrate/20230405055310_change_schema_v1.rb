class ChangeSchemaV1 < ActiveRecord::Migration[6.0]
  def change
  
  
    create_table :testing1s do |t|
      t.boolean :c
      t.float :cfloat, null: false
      t.text :stext, null: false
      t.date :cdate, null: false
      t.datetime :cdatetime, null: false
      t.integer :cint, null: false
      t.integer :cenump, default: 0, null: false
      t.string :cstring, default: '', null: false
      t.timestamps null: false
    end
  
    create_table :testung2s do |t|
      t.datetime :locked_at
      t.string :last_sign_in_ip
      t.datetime :confirmed_at
      t.string :reset_password_token
      t.string :email, default: '', null: false
      t.string :confirmation_token
      t.integer :sign_in_count, default: 0, null: false
      t.string :unconfirmed_email
      t.datetime :last_sign_in_at
      t.datetime :current_sign_in_at
      t.integer :failed_attempts, default: 0, null: false
      t.datetime :confirmation_sent_at
      t.string :password_confirmation
      t.string :unlock_token
      t.datetime :remember_created_at
      t.string :password
      t.datetime :reset_password_sent_at
      t.string :encrypted_password, default: '', null: false
      t.string :current_sign_in_ip
      t.timestamps null: false
    end
  
    add_reference :testung2s, :testing1, foreign_key: true
  
    add_index :testing1s, :cstring, unique: true
    add_index :testung2s, :email, unique: true
    add_index :testung2s, :confirmation_token, unique: true
    add_index :testung2s, :unconfirmed_email, unique: true
    add_index :testung2s, :unlock_token, unique: true
    add_index :testung2s, :reset_password_token, unique: true
  
    add_index :testing1s, :stext, unique: true
  
    add_index :testing1s, :cint, unique: true
  
    add_index :testing1s, :cfloat, unique: true
  
    add_index :testing1s, :cdate, unique: true
  
    add_index :testing1s, :cdatetime, unique: true
  
    add_index :testing1s, :cenump, unique: true
  
    add_index :testing1s, :c, unique: true
  end
end
