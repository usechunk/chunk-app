import { useQuery } from '@tanstack/react-query';
import { modsApi, modpacksApi } from '@/lib/api';

export const useMods = (params?: { search?: string; page?: number; per_page?: number; category?: string }) => {
  return useQuery({
    queryKey: ['mods', params],
    queryFn: () => modsApi.list(params).then((res) => res.data),
  });
};

export const useMod = (id: string) => {
  return useQuery({
    queryKey: ['mod', id],
    queryFn: () => modsApi.get(id).then((res) => res.data),
    enabled: !!id,
  });
};

export const useModpacks = (params?: { search?: string; page?: number; per_page?: number }) => {
  return useQuery({
    queryKey: ['modpacks', params],
    queryFn: () => modpacksApi.list(params).then((res) => res.data),
  });
};

export const useModpack = (id: string) => {
  return useQuery({
    queryKey: ['modpack', id],
    queryFn: () => modpacksApi.get(id).then((res) => res.data),
    enabled: !!id,
  });
};
