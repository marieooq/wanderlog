# frozen_string_literal: true

module Types
  class PlaceType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :city, String
    field :country, String
    field :category, String
    field :image_url, String
    field :description, String
    field :is_favorite, Boolean
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
