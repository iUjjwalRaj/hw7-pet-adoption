function Home({ pets }) {
  const ready = pets.filter((pet) => pet.vaccinated && !pet.isAdopted).length;
  const adopted = pets.filter((pet) => pet.isAdopted).length;

  return (
    <main>
      <h1>Pet Adoption</h1>
      <p>Find a loving pet for your home.</p>
      <p>Total pets: {pets.length}</p>
      <p>Ready for adoption: {ready}</p>
      <p>Adopted pets: {adopted}</p>
    </main>
  );
}

export default Home;
