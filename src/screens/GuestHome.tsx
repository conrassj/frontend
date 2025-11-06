import { useEffect, useState } from "react";
import { getHospedajes, type Hospedaje } from "../service/service";

export default function GuestHome() {
  const [items, setItems] = useState<Hospedaje[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHospedajes()
      .then(setItems)
      .catch((e) => setError(e.message || "Error cargando hospedajes"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container app"><p>Cargando…</p></div>;
  if (error)   return <div className="container app"><p className="error">{error}</p></div>;

  return (
    <main className="container app">
      <h3 className="section-title">Alquileres disponibles</h3>
      <div className="row-cards">
        {items.map((h) => (
          <article key={h.id} className="h-card">
            <div className="thumb lg"><img src={h.imagen} alt={h.nombre} /></div>
            <div className="meta">
              <p>{h.nombre}</p>
              <small>{h.ciudad} · ${h.precioPorNoche}</small>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}


