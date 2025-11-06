import { useNavigate } from 'react-router-dom'
import Tabbar from '../components/Tabbar'

export default function GuestBooking(){
  const nav = useNavigate()
  return (
    <main className="container app" aria-label="Resultados de búsqueda">
      <div className="searchbar">
        <input className="search wide" type="search" defaultValue="Mar del Plata" />
        <button className="chip">Filtro</button>
        <button className="chip">Clasificar</button>
        <span className="muted">99 resultados</span>
      </div>

      <div className="booking-grid">
        <div className="map"><img src="/img/map-mdp.JPG" alt="Mapa de Mar del Plata" /></div>
        <div className="result-card card">
          <div className="thumb xl"><img src="/img/booking1.jpg" alt="Depto frente a playa grande" /></div>
          <div className="result-body">
            <h4>Mansion en La Feliz</h4>
            <div className="muted small">★ 4.8 (273 reseñas) • 2 km</div>
            <div className="price-line"><strong>100.000$</strong> / noche</div>
            <div className="row-actions">
              <button className="btn secondary" onClick={()=>nav('/guest/chat')}>Mensaje</button>
              <button className="btn" onClick={()=>nav('/guest/checkout')}>Seleccionar</button>
            </div>
          </div>
        </div>
      </div>

      <Tabbar active="booking" />
    </main>
  )
}
