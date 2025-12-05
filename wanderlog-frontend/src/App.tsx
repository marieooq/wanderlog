// src/App.tsx
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_PLACES = gql`
  query GetPlaces {
    places {
      id
      title
      city
      country
      category
    }
  }
`;

type Place = {
  id: string;
  title: string;
  city: string | null;
  country: string | null;
  category: string;
};

function App() {
  const { data, loading, error } = useQuery<{ places: Place[] }>(GET_PLACES);

  if (loading) {
    return <main style={{ padding: 24 }}>Loading...</main>;
  }

  if (error) {
    return (
      <main style={{ padding: 24 }}>
        <p>Error: {error.message}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>WanderLog</h1>
      <p style={{ marginBottom: 16 }}>Places I want to visit ✈️</p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data?.places.map((place) => (
          <li
            key={place.id}
            style={{
              padding: "12px 16px",
              marginBottom: 8,
              borderRadius: 8,
              border: "1px solid #333",
              background: "#111",
            }}
          >
            <div style={{ fontWeight: 600 }}>{place.title}</div>
            <div style={{ fontSize: 14, color: "#aaa" }}>
              {place.city}, {place.country} ・ {place.category}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
