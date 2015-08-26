require 'test_helper'

class KitKatTest < ActiveSupport::TestCase
  def setup
  	@kitkat = KitKat.new(image_url: 'k1.jpg', name: 'Tochi Otome', 		cost: 400, 		location: 'Tochigi', 		description: 'Tochigi limited edition strawberry flavored. Tochigi prefecture is an area well known for its strawberries.')
  end

  test '@kitkat should be valid' do
  	assert @kitkat.valid?
  end
end
