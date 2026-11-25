import { Link } from "react-router";

function PetCard({ pet, changeAdoption }) {
  let age;
  if (pet.ageMonths < 12) {
    age = pet.ageMonths + " months";
  } else {
    age = Math.floor(pet.ageMonths / 12) + " years";
  }

  return (
    <article>
      <h3>{pet.emoji} {pet.name}</h3>
      <p>{pet.type} - {pet.breed}</p>
      <p>Age: {age}</p>
      <p>{pet.vaccinated ? "Vaccinated ✅" : "Vaccination Pending 🟡"}</p>
      <p>{pet.adoptionFee === 0 ? "Free" : `₹${pet.adoptionFee}`}</p>
      <Link to={`/pets/${pet.id}`}>View Details</Link>{" "}
      {pet.vaccinated && (
        <button onClick={() => changeAdoption(pet.id, !pet.isAdopted)}>
          {pet.isAdopted ? "Cancel Adoption" : "Adopt"}
        </button>
      )}
    </article>
  );
}

export default PetCard;
