import { Routes, Route } from "react-router-dom";
import { HomePage, RQSuperHeroes, SuperHeroesPage } from "./Pages";

function App() {


  return (
    <Routes>
      <Route path="/super-heroes" element={<SuperHeroesPage />}/>
      <Route path="/rq-super-heroes" element={<RQSuperHeroes />}/>
      <Route path="/" element={<HomePage />}/>
    </Routes>
  )
}

export default App
