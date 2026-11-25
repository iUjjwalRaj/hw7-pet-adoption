import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import petsData from "./data/pets";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Details from "./pages/Details";
import Adopted from "./pages/Adopted";

function App() {
  const [pets, setPets] = useState(petsData);

  function changeAdoption(id, value) {
    setPets(pets.map((pet) => {
      if (pet.id === id) {
        pet.isAdopted = value;
      }
      return pet;
    }));
  }

  return (
    <BrowserRouter>
      <Navbar adoptedCount={pets.filter((pet) => pet.isAdopted).length} />
      <Routes>
        <Route path="/" element={<Home pets={pets} />} />
        <Route path="/pets" element={<Pets pets={pets} changeAdoption={changeAdoption} />} />
        <Route path="/pets/:id" element={<Details pets={pets} changeAdoption={changeAdoption} />} />
        <Route path="/adopted" element={<Adopted pets={pets} changeAdoption={changeAdoption} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;