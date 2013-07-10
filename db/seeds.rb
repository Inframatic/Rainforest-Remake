# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'
 
20.times do
  Product.create!(
    :name           => "#{Faker::Lorem.word}".titleize,
    :description    => Faker::Lorem.sentence(3),
    :price_in_cents => [50000, 501, 1000, 2000, 2500, 5000, 10000].sample
  )
end
 
#User.create!(
   :name                  => "Robbie on Rails",
   :email                 => "ian.steffy@.com",
   :password              => "password",
   :password_confirmation => "password"
)