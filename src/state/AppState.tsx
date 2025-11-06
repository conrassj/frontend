import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Role = 'huesped' | 'anfitrion' | null

export type HostProp = {
  title: string
  city: string
  price: number
  img: string
  solicitudes: number
}

type AppCtx = {
  role: Role
  setRole: (r: Role) => void
  hostProps: HostProp[]
  setHostProps: (p: HostProp[]) => void
}

const AppContext = createContext<AppCtx | null>(null)

const HOST_KEY = 'hospedin:hostProps'
const ROLE_KEY = 'hospedin:role'

const defaults: HostProp[] = [
  { title: 'Propiedad 1', city: 'Mar del Plata', price: 180000, img: '/img/alqu1.jpg', solicitudes: 2 },
  { title: 'Propiedad 2', city: 'Chapadmalal',   price:  50000, img: '/img/alqu2.jpg', solicitudes: 1 },
  { title: 'Propiedad 3', city: 'Pinamar',       price: 110000, img: '/img/alqu3.jpg', solicitudes: 0 },
  { title: 'Propiedad 4', city: 'Mar del Plata', price: 120000, img: '/img/tend1.jpg', solicitudes: 0 },
  { title: 'Propiedad 5', city: 'Miramar',       price:  95000, img: '/img/tend2.jpg', solicitudes: 0 },
  { title: 'Propiedad 6', city: 'Mar del Plata', price: 140000, img: '/img/tend3.jpg', solicitudes: 3 }
]

export const AppStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [role, setRole] = useState<Role>(null)
  const [hostProps, setHostProps] = useState<HostProp[]>(defaults)

  useEffect(()=>{
    const r = localStorage.getItem(ROLE_KEY) as Role
    if (r) setRole(r)
    const raw = localStorage.getItem(HOST_KEY)
    if (raw) { try { setHostProps(JSON.parse(raw)) } catch {} }
  }, [])

  useEffect(()=>{
    if (role) localStorage.setItem(ROLE_KEY, role)
    else localStorage.removeItem(ROLE_KEY)
  }, [role])

  useEffect(()=>{
    localStorage.setItem(HOST_KEY, JSON.stringify(hostProps))
  }, [hostProps])

  const value = useMemo(()=>({ role, setRole, hostProps, setHostProps }), [role, hostProps])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppState(){
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}

export function formatPrice(n:number){
  try { return new Intl.NumberFormat('es-AR').format(n) } catch { return String(n) }
}
