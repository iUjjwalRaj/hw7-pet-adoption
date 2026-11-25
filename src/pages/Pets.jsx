import { useState } from "react";
import PetCard from "../components/PetCard";

function Pets({ pets, changeAdoption }) {
  const [type, setType] = useState("All");
  const shownPets = type === "All" ? pets : pets.filter((pet) => pet.type === type);

  return (
    <main>
      <h1>All Pets</h1>
      <label>
        Filter:
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>All</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Rabbit</option>
          <option>Bird</option>
        </select>
      </label>
      {shownPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} changeAdoption={changeAdoption} />
      ))}
    </main>
  );
}

export default Pets;
