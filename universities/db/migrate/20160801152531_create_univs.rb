class CreateUnivs < ActiveRecord::Migration[5.0]
  def change
    create_table :univs do |t|
      t.string :name
      t.string :site
      t.string :country

      t.timestamps
    end
  end
end
