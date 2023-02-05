import { useEffect, useState } from 'react';
import PetComponent from '../../Components/PetComponent';
import './style.css'
import { PETS, DELAYMS, MESSAGE } from '../../config'

function GetRandomPet(){
  var petsLength = PETS.length;
  var randomIndex = Math.floor(Math.random() * petsLength);
  var randomPet = PETS[randomIndex]
  return randomPet
}

function HomePage() {
  const [pet, setPet] = useState(GetRandomPet())
  useEffect(()=>{
    let randomPet = GetRandomPet()
    setInterval(()=> setPet(randomPet), DELAYMS);
  })
  return (<PetComponent message={MESSAGE} pet={pet}/>);
}

export default HomePage;
