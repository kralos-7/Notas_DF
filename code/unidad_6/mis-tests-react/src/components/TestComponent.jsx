// DemoComponent.jsx
import { useState, useEffect } from "react";

export default function DemoComponent() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <div>
      <button
        onClick={() => setVisible(!visible)}
        className={visible ? "active" : "inactive"}
      >
        Toggle
      </button>

      {visible && <p>Hola Mundo</p>}

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button disabled={!name}>Guardar</button>

      {loaded && <span>Datos cargados</span>}
    </div>
  );
}
