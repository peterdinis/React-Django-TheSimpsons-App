import React from "react";
import { gql, useMutation } from "@apollo/client";

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
    <div>
      <form onSubmit={onNewCharacterSubmit}>
        <input
          type="number"
          ref={(node) => {
            numInput = node;
          }}
        />

        <input
          type="text"
          ref={(nameNode) => {
            nameInput = nameNode;
          }}
        />

        <input
          type="text"
          ref={(descriptionNode) => {
            descriptionInput = descriptionNode;
          }}
        />

        <button type="submit">Add New Simpson Character</button>
      </form>
    </div>
  );
}

export default CreateCharacter;
