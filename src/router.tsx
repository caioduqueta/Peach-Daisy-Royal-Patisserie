import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout.tsx'
import { CartPage } from './pages/CartPage'
import { Home } from './pages/Home'
import { LocationsPage } from './pages/LocationsPage'
import { PâtisseriePage } from './pages/PâtisseriePage'
import { TeamPage } from './pages/TeamPage'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/patisserie" element={<PâtisseriePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}
