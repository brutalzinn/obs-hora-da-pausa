import './style.css'

function DisplayMessage({message}){
if(message != null)
return (<div className="message">
<h1>{message}</h1>
</div>)
}
function PetComponent({pet, message}) {
  if(pet == null){
    return <>Pet not found</>
  }
  return (
    <div className="pet">
        <div className="image">
          <img src={pet.img_url} alt={pet.description}/>
        </div>
        <DisplayMessage message={message}/>
          <div className="description">
              <h1>{pet.description}</h1>
          </div>
    </div>
  );
}
export default PetComponent;
