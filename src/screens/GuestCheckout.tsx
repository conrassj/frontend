import { useState } from 'react'
import Tabbar from '../components/Tabbar'

export default function GuestCheckout(){
  const [ok,setOk] = useState(false)
  return (
    <main className="container app" aria-label="Checkout">
      <h3 className="section-title">Pantalla de pago</h3>
      <div className="checkout">
        <div className="check-row"><span>FECHA</span><strong>12 – 15 de Enero</strong></div>
        <div className="check-row"><span>PRECIO</span><strong>$400.000 · Estadia | 4 días</strong></div>
        <div className="check-row"><span>PAGO</span><strong>Visa ••1234</strong></div>
        <div className="check-row"><span>PROMOCIONES</span><button className="link small">Aplicar código promocional</button></div>
        <div className="check-row article">
          <span>ARTÍCULOS</span>
          <div className="art">
            <div className="thumb sm"><img src="/img/checkout1.jpg" alt="Depto frente a la playa" /></div>
            <div>
              <strong>Mansion en La Feliz</strong><br />
              <small>Ideal para ir con los amigos!</small>
            </div>
            <strong className="price">$100.000</strong>
          </div>
        </div>
        <div className="total"><div className="grand"><span>Total</span><strong>$400.000</strong></div></div>
        <button className="btn" onClick={()=>{setOk(true); setTimeout(()=>setOk(false),1800)}}>Reservar</button>
        <p className={`ok ${ok ? '' : 'hidden'}`}>¡Reserva registrada (muchas gracias)!</p>
      </div>

      <Tabbar active="checkout" />
    </main>
  )
}
