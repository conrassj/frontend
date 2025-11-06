// Base del backend (SIN espacios)
const API = "http://localhost:8080";

// ================== DTOs ==================
export interface Hospedaje {
  id: number;
  nombre: string;
  descripcion: string;
  capacidad_maxima: number;
  direccion: string;
  imagen: string;
  precioPorNoche: number;
  fechaCreacion?: string;
  fechaModificacion?: string;
  tipoHospedaje: string;
  admite_mascotas: boolean;
  ciudad: string;
}

export interface Reserva {
  id: number;
  idUsuario: number;
  idHospedaje: number;
  fechaCheckIn: string;   // LocalDate -> string ISO
  fechaCheckOut: string;  // LocalDate -> string ISO
  cantNinos: number;
  cantAdultos: number;
  cantBebes: number;
  cantMascotas: number;
  importe_total: number;  // BigDecimal -> number
}

export interface Usuario {
  password: string;
  email: string;
  nombre: string;
  apellido: string;
  telefono: string;
  fecha_nacimiento: string; // LocalDate -> string ISO
  pais: string;
  provincia: string;
  localidad: string;
  tipoUsuario: string;
  reservas: Reserva[];
}

// Helper para manejar errores
async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const r = await fetch(input, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(text || `HTTP ${r.status}`);
  }
  // 204 sin body
  if (r.status === 204) return undefined as T;
  return r.json() as Promise<T>;
}

// ================== Hospedaje ==================
export const getHospedajes = () =>
  http<Hospedaje[]>(`${API}/hospedaje`);

export const getHospedaje = (id: number) =>
  http<Hospedaje>(`${API}/hospedaje/${id}`);

export const crearHospedaje = (body: Omit<Hospedaje, "id">) =>
  // tu backend devuelve String de éxito/validación
  http<string>(`${API}/hospedaje/registrar`, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const actualizarHospedaje = (body: Hospedaje) =>
  http<string>(`${API}/hospedaje/actualizar`, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const borrarHospedaje = (id: number) =>
  // tu DELETE devuelve 204; no hay JSON
  http<void>(`${API}/hospedaje/borrar/${id}`, { method: "DELETE" });

export const getReservasDeHospedaje = (id: number) =>
  http<Reserva[]>(`${API}/hospedaje/reservas/${id}`);

// ================== Usuarios / Reservas ==================
// ⚠️ Ajustá estos paths a los de tus controladores reales (si cambian).
export const getUsuarios = () =>
  http<Usuario[]>(`${API}/usuarios`);

export const getReservas = () =>
  http<Reserva[]>(`${API}/reservas`);

export const crearReserva = (b: Omit<Reserva, "id">) =>
  http<Reserva>(`${API}/reservas`, {
    method: "POST",
    body: JSON.stringify(b),
  });


