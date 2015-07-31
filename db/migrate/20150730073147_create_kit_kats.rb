class CreateKitKats < ActiveRecord::Migration
  def change
    create_table :kit_kats do |t|
      t.string :image_url
      t.string :name
      t.string :description
      t.integer :cost

      t.timestamps null: false
    end
  end
end
