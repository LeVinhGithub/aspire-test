class ChangeSchemaV2 < ActiveRecord::Migration[6.0]
  def change
  
  
    add_column :testing1s, :testung2s_count, :integer, default: 0
  end
end
