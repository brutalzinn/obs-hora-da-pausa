import { useEffect, useState } from 'react';
import PetComponent from '../../Components/PetComponent';
import './style.css'
import { PETS, DELAYMS } from '../../config'
import { useSearchParams } from "react-router-dom"
function GetRandomPet(){
  var petsLength = PETS.length;
  var randomIndex = Math.floor(Math.random() * petsLength);
  var randomPet = PETS[randomIndex]
  return randomPet
}

function HomePage() {
  const [pet, setPet] = useState(GetRandomPet())
  const [getParams] = useSearchParams()
  const message = getParams.get("message")
  useEffect(()=>{
    let randomPet = GetRandomPet()
    setInterval(()=> setPet(randomPet), DELAYMS);
  }, [])
  return (<PetComponent message={message} pet={pet}/>);
}

export default HomePage;
