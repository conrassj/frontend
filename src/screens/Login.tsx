import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !pass) {
      setError("Completá email y contraseña.");
      return;
    }
    setError("");
    // acá en el futuro podés llamar a tu /auth/login del back
    nav("/guest/home"); // 👈 navega a la pantalla que pega al back
  };

  return (
    <main className="container app">
      <div className="panel">
        <h1 className="title">Hospedín</h1>
        <form className="form" onSubmit={onSubmit}>
          <input className="input" type="email" placeholder="email@domain.com"
                 value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="contraseña"
                 value={pass} onChange={e=>setPass(e.target.value)} />
          <button className="btn" type="submit">Continuar</button>
          <p className="error" aria-live="polite">{error}</p>
        </form>
      </div>
    </main>
  );
}

