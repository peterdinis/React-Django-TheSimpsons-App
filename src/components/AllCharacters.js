import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_CHARACTERS = gql`
  query {
    allCharacters {
      name
      description
      num
    }
  }
`;

function AllCharacters() {
    const {loading, error, data} = useQuery(ALL_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  /* return data.allCharacters.map(({name, description, num}) => {
      <div>
          <h1>{num}</h1>
          <p>{description}</p>
          <h4>{name}</h4>
      </div>
  }) */

  return data.allCharacters.map(({name, description, num}) => (
    <div>
      <h1>{num}</h1>
          <p>{description}</p>
          <h4>{name}</h4>
    </div>
  ))
}

export default AllCharacters;
