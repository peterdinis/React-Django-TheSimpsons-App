import React from "react";
import { gql, useMutation } from "@apollo/client";
import "./CreateCharacter.css";

const CREATE_CHARACTER = gql`
  mutation createCharacter($num: Int!, $name: String!, $description: String!) {
    createCharacter(num: $num, name: $name, description: $description) {
      character {
        num
        name
        description
      }
    }
  }
`;

function CreateCharacter() {
  let numInput, nameInput, descriptionInput;
  const [createCharacter, { data }] = useMutation(CREATE_CHARACTER);

  const onNewCharacterSubmit = (e) => {
    e.preventDefault();
    createCharacter({
      variables: {
        num: numInput.value,
        name: nameInput.value,
        description: descriptionInput.value,
      },
    });

    numInput.value = "";
    nameInput.value = "";
    descriptionInput.value = "";
  };

  return (
    <div className="form__helper">
      <h1 className="form__header">Add a new character</h1>
      <form onSubmit={onNewCharacterSubmit}>
        <input
          className="form__input"
          placeholder="Character number"
          type="number"
          ref={(node) => {
            numInput = node;
          }}
        />{" "}
        <br />
        <input
          className="form__input"
          placeholder="Character name"
          type="text"
          ref={(nameNode) => {
            nameInput = nameNode;
          }}
        />{" "}
        <br />
        <input
          placeholder="Character Description"
          className="form__input"
          type="text"
          ref={(descriptionNode) => {
            descriptionInput = descriptionNode;
          }}
        />{" "}
        <br />
        <button className='form__button' type="submit">Add New Simpson Character</button>
      </form>
    </div>
  );
}

export default CreateCharacter;
