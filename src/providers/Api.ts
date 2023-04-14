import axios from 'axios';

const baseURL =
  import.meta.env.VITE_API_BASE_URL || 'https://finance-l0c6.onrender.com/api';

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
}
