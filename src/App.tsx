import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mods from './pages/Mods';
import ModDetail from './pages/ModDetail';
import Modpacks from './pages/Modpacks';
import ModpackDetail from './pages/ModpackDetail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mods" element={<Mods />} />
            <Route path="/mods/:id" element={<ModDetail />} />
            <Route path="/modpacks" element={<Modpacks />} />
            <Route path="/modpacks/:id" element={<ModpackDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
