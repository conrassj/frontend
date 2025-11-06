import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './screens/Login'
import Roles from './screens/Roles'
import GuestHome from './screens/GuestHome'
import GuestBooking from './screens/GuestBooking'
import GuestChat from './screens/GuestChat'
import GuestCheckout from './screens/GuestCheckout'
import Host from './screens/Host'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* redirección inicial */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<Roles />} />

        {/* vistas de huésped */}
        <Route path="/guest/home" element={<GuestHome />} />
        <Route path="/guest/booking" element={<GuestBooking />} />
        <Route path="/guest/chat" element={<GuestChat />} />
        <Route path="/guest/checkout" element={<GuestCheckout />} />

        {/* vistas de anfitrión */}
        <Route path="/host" element={<Host />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
