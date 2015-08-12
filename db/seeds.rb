# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
k1 = KitKat.create(image_url: 'assets/k1.jpg', name: 'Tochi Otome', 		cost: 400, 		location: 'Tochigi', 		description: 'Tochigi limited edition strawberry flavored. Tochigi prefecture is an area well known for its strawberries.')
k2 = KitKat.create(image_url: 'assets/k2.jpg', name: 'Amaou Strawberry', 	cost: 400, 		location: 'Kyushu', 		description: 'Kyushu limited edition strawberry flavored. Amaou are a speciality type of strawberry.')
k3 = KitKat.create(image_url: 'assets/k3.jpg', name: 'Sublime plain', 		cost: 300, 		location: 'Tokyo', 			description: 'Sublime plain flavor from the Confectionary. A strong dark chocolate flavor.')
k4 = KitKat.create(image_url: 'assets/k4.jpg', name: 'Sublime Raspberry', 	cost: 300, 		location: 'Tokyo', 			description: 'Sublime raspberry flavor from the Conectionary. Strong dark chocolate flavor with raspberry flavors.')
k5 = KitKat.create(image_url: 'assets/k5.jpg', name: 'Pudding', 			cost: 300, 		location: 'Greater Japan', 	description: 'Pudding bakeable flavor. Can be baked to have a nice finish or eaten without.')
k6 = KitKat.create(image_url: 'assets/k6.jpg', name: 'Azuki Sandwich', 		cost: 800, 		location: 'Nagoya', 		description: "Nagoya's signature redbean sandiwch flavor. Red bean flavor is overpowered by chocolate but can still be tasted.")
k7 = KitKat.create(image_url: 'assets/k7.jpg', name: 'Orange Cocktail', 	cost: 1200,		location: 'Tokyo', 			description: 'Orange cocktail from the Confectionary. Tastes exactly as described.')
k8 = KitKat.create(image_url: 'assets/k8.jpg', name: 'Cream Cheese', 		cost: 1200,		location: 'Tokyo', 			description: 'Cream Cheese from the Confectionary. The cream cheese flavor is much stronger than the white chocolate.')
