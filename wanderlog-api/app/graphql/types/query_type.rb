module Types
  class QueryType < Types::BaseObject
    field :places, [Types::PlaceType], null: false do
      argument :category, String, required: false
      argument :search, String, required: false
    end

    def places(category: nil, search: nil)
      scope = Place.all
      scope = scope.where(category: category) if category.present?

      if search.present?
        like = "%#{search}%"
        scope = scope.where("title LIKE :q OR city LIKE :q", q: like)
      end

      scope
    end
  end
end
