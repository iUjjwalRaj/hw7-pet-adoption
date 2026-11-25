import { Link, useParams } from "react-router";

function Details({ pets, changeAdoption }) {
  const { id } = useParams();
  const pet = pets.find((item) => item.id === Number(id));

  if (!pet) return <p>Pet not found.</p>;

  return (
    <main>
      <h1>{pet.emoji} {pet.name}</h1>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Gender: {pet.gender}</p>
      <p>Age: {pet.ageMonths < 12 ? `${pet.ageMonths} months` : `${Math.floor(pet.ageMonths / 12)} years`}</p>
      <p>{pet.vaccinated ? "Vaccinated ✅" : "Vaccination Pending 🟡"}</p>
      <p>Fee: {pet.adoptionFee === 0 ? "Free" : `₹${pet.adoptionFee}`}</p>
      {pet.vaccinated && (
        <button onClick={() => changeAdoption(pet.id, !pet.isAdopted)}>
          {pet.isAdopted ? "Cancel Adoption" : "Adopt"}
        </button>
      )}
      <p><Link to="/pets">Back to pets</Link></p>
    </main>
  );
}

export default Details;
