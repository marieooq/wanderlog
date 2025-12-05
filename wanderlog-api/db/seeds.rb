# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Place.create!(
  [
    {
      title: 'Tianjin Binhai Library',
      city: 'Tianjin',
      country: 'China',
      category: 'library',
      is_favorite: false
    },
    {
      title: 'State Library of Victoria',
      city: 'Melbourne',
      country: 'Australia',
      category: 'library',
      is_favorite: false
    },
    {
      title: 'Starfield Library (Byeolmadang Library)',
      city: 'Seoul',
      country: 'South Korea',
      category: 'library',
      is_favorite: false
    },
    {
      title: 'Biblioteca Vasconcelos',
      city: 'Mexico City',
      country: 'Mexico',
      category: 'library',
      is_favorite: false
    },
    {
      title: 'The British Museum',
      city: 'London',
      country: 'United Kingdom',
      category: 'museum',
      is_favorite: false
    },
    {
      title: 'Guggenheim Museum Bilbao',
      city: 'Bilbao',
      country: 'Spain',
      category: 'museum',
      is_favorite: false
    }
  ]
)
