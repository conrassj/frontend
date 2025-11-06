import { NavLink } from 'react-router-dom'

export default function Tabbar({active}:{active:'home'|'booking'|'chat'|'checkout'}){
  return (
    <nav className="tabbar">
      <NavLink className={`tab ${active==='home'?'is-active':''}`} to="/guest/home">🏠</NavLink>
      <NavLink className={`tab ${active==='booking'?'is-active':''}`} to="/guest/booking">📍</NavLink>
      <NavLink className={`tab ${active==='chat'?'is-active':''}`} to="/guest/chat">💬</NavLink>
      <NavLink className={`tab ${active==='checkout'?'is-active':''}`} to="/guest/checkout">🧾</NavLink>
    </nav>
  )
}
