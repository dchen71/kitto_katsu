class AddLocationToKitKat < ActiveRecord::Migration
  def change
  	add_column :kit_kats, :location, :string
  end
end
