import React from 'react';
import './App.css';
import ProfilComponent from './profil/ProfilComponent';
import myImg from './profil/myimg.jpg'

const handelName = (name) => {
  alert(name)
};


function App() {
  return (
    <div className="App">
    <ProfilComponent
    name="Omar Ben Brahim"
    bio="I'm 27 years old, I gratuated in 2011, specialized in mathematics.In 2014 I got my bachelor degree from IPEIN then I chose ENSIT to continue mu studies and I got my Engineer degree in 2016. I had many opportunities since 2016 to work in the mechanical field and finally i chose to change the road of my career so I came to go my code and my aim is to become a good web developper"
    profession="Mechanical Engineer"
      handelName={handelName}>
    <img className="img"src={myImg} alt=""/>
      </ProfilComponent> 
      
    </div>

    
  );
}

export default App;
