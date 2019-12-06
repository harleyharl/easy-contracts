class CreateUserContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_contracts do |t|
      t.integer :user_id
      t.integer :contract_id
      t.timestamps
    end
  end
end
