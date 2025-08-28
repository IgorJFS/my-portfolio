import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { useLanguageFromPath } from './lib/useLanguageFromPath';

function AppContent() {
  useLanguageFromPath();

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/pt-br' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
