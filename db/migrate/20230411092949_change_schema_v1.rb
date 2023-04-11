class ChangeSchemaV1 < ActiveRecord::Migration[6.0]
  def change
  
  
    create_table :users do |t|
      t.string :name
      t.text :introduce
      t.timestamps null: false
    end
  end
end
