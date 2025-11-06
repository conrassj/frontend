import { useEffect, useState } from "react";
import {
  getHospedajes,
  borrarHospedaje,
  crearHospedaje,
  type Hospedaje,
} from "../service/service";

export default function Host() {
  const [items, setItems] = useState<Hospedaje[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setItems(await getHospedajes());
    } catch (e: any) {
      setError(e.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const onCrearDemo = async () => {
    try {
      await crearHospedaje({
        nombre: "Demo desde front",
        descripcion: "Alta de prueba",
        capacidad_maxima: 2,
        direccion: "Calle 123",
        imagen: "https://placehold.co/600x400",
        precioPorNoche: 123456,
        tipoHospedaje: "Departamento",
        admite_mascotas: false,
        ciudad: "Mar del Plata",
      });
      await load();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const onBorrar = async (id: number) => {
    if (!confirm("¿Borrar hospedaje?")) return;
    await borrarHospedaje(id);
    setItems((x) => x.filter((i) => i.id !== id));
  };

  if (loading) return <div className="container app"><p>Cargando…</p></div>;
  if (error)   return <div className="container app"><p className="error">{error}</p></div>;

  return (
    <main className="container app">
      <div className="host-header">
        <h2 className="section-title">Tus propiedades</h2>
        <div className="host-actions">
          <button className="btn secondary" onClick={onCrearDemo}>
            + Agregar demo
          </button>
        </div>
      </div>

      <div className="grid-3">
        {items.map((h) => (
          <article key={h.id} className="card">
            <div className="thumb">
              <img src={h.imagen} alt={h.nombre} />
            </div>
            <p>{h.nombre}</p>
            <small>
              {h.ciudad} · ${h.precioPorNoche}
            </small>
            <div className="row-actions">
              <button className="btn sm secondary" onClick={() => onBorrar(h.id)}>
                Borrar
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

