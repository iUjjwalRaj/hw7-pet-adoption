import PetCard from "../components/PetCard";

function Adopted({ pets, changeAdoption }) {
  const adoptedPets = pets.filter((pet) => pet.isAdopted);
  const totalFee = adoptedPets.reduce((total, pet) => total + pet.adoptionFee, 0);

  return (
    <main>
      <h1>Adopted Pets</h1>
      {adoptedPets.length === 0 ? (
        <p>No pets adopted yet</p>
      ) : (
        <>
          <p>Total adoption fee: ₹{totalFee}</p>
          {adoptedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} changeAdoption={changeAdoption} />
          ))}
        </>
      )}
    </main>
  );
}

export default Adopted;
