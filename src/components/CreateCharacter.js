import React from "react";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CreateCharacter.css";

const CREATE_CHARACTER = gql`
  mutation createCharacter(
    $num: Int!
    $name: String!
    $description: String!
    $image: String!
  ) {
    createCharacter(
      num: $num
      name: $name
      description: $description
      image: $image
    ) {
      character {
        num
        name
        description
        image
      }
    }
  }
`;

const notify = () => toast.success("Postava bola úspešne vytvorená");

function CreateCharacter() {
  let numInput, nameInput, descriptionInput, imageInput;
  const [createCharacter] = useMutation(CREATE_CHARACTER);

  const onNewCharacterSubmit = (e) => {
    e.preventDefault();
    createCharacter({
      variables: {
        num: numInput.value,
        name: nameInput.value,
        description: descriptionInput.value,
        image: imageInput.value,
      },
    });

    notify();

    numInput.value = "";
    nameInput.value = "";
    descriptionInput.value = "";
    imageInput.value = "";
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
        <input
          className="form__input"
          placeholder="Character image"
          type="text"
          ref={(imageNode) => {
            imageInput = imageNode;
          }}
        />{" "}
        <br />
        <button className="form__button" type="submit">
          Add New Simpson Character
        </button>
      </form>
      <ToastContainer />
      <div className='form__info'>
        <h3>
          All Fields in form are required
        </h3>
      </div>
    </div>
  );
}

export default CreateCharacter;
