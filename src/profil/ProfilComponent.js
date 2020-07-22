
import React from 'react'
import propTypes from "prop-types";
import "../App.css";

export default function ProfilComponent(props) {
    return (
      <div>
        <button
        
          onClick={() => props.handelName(props.name)}
        >
          What's your name?
        </button>
        <div>{props.children}</div>
  
        <hr />
        <div>
          <p className="info"> Name : {props.name}</p>
          <hr />
          <p className="info"> Profession :{props.profession}</p>
          <hr />
          <p className="info"> Bio :{props.bio}</p> <hr />
        </div>
      </div>
    );
  }
  ProfilComponent.defaultProps = {
    name: "Name",
    bio: "bio",
    profession: "profession",
  };
  
  ProfilComponent.propTypes = {
    name: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    
  };
    




