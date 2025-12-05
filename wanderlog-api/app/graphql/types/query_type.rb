module Types
  class QueryType < Types::BaseObject
    field :places, [Types::PlaceType], null: false do
      argument :category, String, required: false
    end

    def places(category: nil)
      scope = Place.all
      scope = scope.where(category: category) if category.present?
      scope
    end
  end
end
