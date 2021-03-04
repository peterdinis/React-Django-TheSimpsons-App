import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./AllCharacters.css";

const ALL_CHARACTERS = gql`
  query {
    allCharacters {
      name
      description
      num
      image
    }
  }
`;

function AllCharacters() {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);
  if (loading) return <p className="load">Loading...</p>;
  if (error) return <p className="error">Error :(</p>;

  return data.allCharacters.map(({ name, description, num, image }) => (
    <div className="our__characters">
      <h1 className='character__number'>{num}</h1>
      <p className='character__description'>{description}</p>
      <h4 className='character__name'>{name}</h4>
      <img className="character__image" src={image} alt={name} />
    </div>
  ));
}

export default AllCharacters;
