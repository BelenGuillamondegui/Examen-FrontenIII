import "./App.css";
import React, { useState } from "react";
import Card from "./Components/Card"
import "./Components/Form.css"


function App() {
  const [user, setUser] = useState({
    nombre: "",
    comidaFavorita: "",
    animalFavorito: "",
    colorFavorito: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length > 3 && user.comidaFavorita.length > 6 && user.colorFavorito !== "") {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  return (
    <div className="App">
      <h1 className="titulo">Mi información</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          type="text"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Comida favorita</label>
        <input
          type="text"
          value={user.comidaFavorita}
          onChange={(e) => setUser({ ...user, comidaFavorita: e.target.value })}
        />
        <label>Animal favorito</label>
        <input
          type="text"
          value={user.animalFavorito}
          onChange={(e) => setUser({ ...user, animalFavorito: e.target.value })}
        />

        <select
          value={user.colorFavorito}
          onChange={(e) => setUser({ ...user, colorFavorito: e.target.value })}
        >
          <option value="">Seleccione un color</option>
          <option value="Rojo">Rojo</option>
          <option value="Azul">Azul</option>
          <option value="Amarillo">Amarillo</option>
        </select>
        <button>Enviar</button>
      </form>
      <h3 className="error">
      {err && "Por favor chequea que la información sea correcta"}
      </h3>
      {show && <Card user={user} />}
    </div>
  );
}

export default App;
