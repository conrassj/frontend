import { useNavigate } from 'react-router-dom'
import { useAppState } from '../state/AppState'
import { useState } from 'react'

export default function Roles(){
  const { setRole } = useAppState()
  const [sel,setSel] = useState<'huesped'|'anfitrion'|null>(null)
  const nav = useNavigate()

  const onContinue = () => {
    if (!sel) return
    setRole(sel)
    nav(sel === 'huesped' ? '/guest/home' : '/host')
  }

  return (
    <main className="container app">
      <section aria-label="Elegir rol">
        <div className="panel">
          <h2 className="subtitle center">Elegí qué querés ser</h2>
          <div className="role-select" role="group" aria-label="Seleccioná tu rol">
            <button className={`role ${sel==='huesped'?'active':''}`} onClick={()=>setSel('huesped')} type="button">Huésped</button>
            <button className={`role ${sel==='anfitrion'?'active':''}`} onClick={()=>setSel('anfitrion')} type="button">Anfitrión</button>
          </div>
          <button className="btn" type="button" onClick={onContinue}>Continuar</button>
          <button className="link mt-1" type="button" onClick={()=>nav('/login')}>Cerrar sesión</button>
        </div>
      </section>
    </main>
  )
}
