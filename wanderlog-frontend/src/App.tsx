// src/App.tsx
import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_PLACES = gql`
  query GetPlaces($category: String) {
    places(category: $category) {
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
const categories = [
  "All",
  "library",
  "museum",
  "architecture",
  "cafe",
] as const;

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, loading, error } = useQuery<{ places: Place[] }>(GET_PLACES, {
    variables: { category: selectedCategory },
  });

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
      <div
        style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}
      >
        {categories.map((cat) => {
          const value = cat === "All" ? null : cat;
          const isActive = selectedCategory === value;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(value)}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid #444",
                background: isActive ? "#fff" : "#222",
                color: isActive ? "#000" : "#fff",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
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
