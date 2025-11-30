import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface Mod {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  downloads: number;
  created_at: string;
  updated_at: string;
  minecraft_versions: string[];
  categories: string[];
  image_url?: string;
}

export interface Modpack {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  downloads: number;
  created_at: string;
  updated_at: string;
  minecraft_version: string;
  mod_count: number;
  image_url?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

export const modsApi = {
  list: (params?: { search?: string; page?: number; per_page?: number; category?: string }) =>
    api.get<PaginatedResponse<Mod>>('/mods', { params }),
  
  get: (id: string) =>
    api.get<Mod>(`/mods/${id}`),
};

export const modpacksApi = {
  list: (params?: { search?: string; page?: number; per_page?: number }) =>
    api.get<PaginatedResponse<Modpack>>('/modpacks', { params }),
  
  get: (id: string) =>
    api.get<Modpack>(`/modpacks/${id}`),
};

export const authApi = {
  githubLogin: () => {
    window.location.href = '/api/auth/github';
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
    window.location.href = '/';
  },
  
  getUser: () =>
    api.get('/auth/user'),
};
