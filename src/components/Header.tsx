import { useNavigate, useLocation } from 'react-router-dom'
import { useAppState } from '../state/AppState'

export default function Header(){
  const { setRole } = useAppState()
  const nav = useNavigate()
  const loc = useLocation()
  const showLogout = loc.pathname !== '/login'
  const onLogout = () => {
    localStorage.removeItem('hospedin:role')
    setRole(null)
    nav('/login')
  }
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <div className="logo" aria-hidden="true" />
          <span>Hospedín</span>
        </div>
        <nav className="nav">
          {showLogout && (
            <button className="link" type="button" title="Cerrar sesión" onClick={onLogout}>
              Cerrar sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
