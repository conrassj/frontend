import { useState } from 'react'
import Tabbar from '../components/Tabbar'

export default function GuestChat(){
  const [log,setLog] = useState<string[]>(['¡Hola! ¿Sigue disponible el depto?','Sí, sigue disponible 😄'])
  const [txt,setTxt] = useState('')

  const send = () => {
    const t = txt.trim()
    if (!t) return
    setLog(prev => [...prev, `ME:${t}`])
    setTxt('')
  }

  return (
    <main className="container app" aria-label="Chat">
      <header className="chat-header">
        <div className="avatar"><img src="/img/avatar-pilar.jpg" alt="Pilar" /></div>
        <div><strong>Pilar</strong><br /><small className="muted">Activo hace 11 minutos</small></div>
        <div className="chat-actions"></div>
      </header>

      <div className="chat-log">
        {log.map((m,i)=>{
          const me = m.startsWith('ME:')
          const text = me ? m.slice(3) : m
          return <p key={i} className={`msg ${me?'me':'other'}`}>{text}</p>
        })}
      </div>

      <div className="chat-input">
        <input value={txt} onChange={e=>setTxt(e.target.value)} type="text" placeholder="Mensaje..." />
        <button className="btn" onClick={send}>Enviar</button>
      </div>

      <Tabbar active="chat" />
    </main>
  )
}
