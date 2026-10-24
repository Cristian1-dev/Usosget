import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { GetObjeto } from "./Pages/GetObjeto";
import { GetAdjetivo } from "./Pages/GetAdjetivo";
import { GetLugar } from "./Pages/GetLugar";
import { GetParticipioPasado } from "./Pages/GetParticipioPasado";
import { Get } from "./Pages/Get";
import { Resumen } from "./Pages/Resumen";
import { Expresiones } from "./Pages/Expresiones";
import { PhrasalVerbs } from "./Pages/PhrasalVerbs";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-objeto" element={<GetObjeto />} />
        <Route path="/get-adjetivo" element={<GetAdjetivo />} />
        <Route path="/get-lugar" element={<GetLugar />} />
        <Route path="/get-participio" element={<GetParticipioPasado />} />
        <Route path="/get" element={<Get />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/expresiones" element={<Expresiones />} />
        <Route path="/phrasal-verbs" element={<PhrasalVerbs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
