import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/Layouts/MainLayout'
import { Home } from './features/Home/Home'
import { Relic } from './features/Relic/Relic'
import { Service } from './features/Service/Service'
import { Exhibition } from './features/Exhibition/Exhibition'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="relic" element={<Relic />} />
        <Route path="service" element={<Service />} />
        <Route path="Exhibition" element={<Exhibition />} />
      </Routes>
    </MainLayout>
  )
}

export default App
