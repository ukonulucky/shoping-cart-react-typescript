import { Routes, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./pages/Navbar"
function App() {
 
  return (
    <div className="App">
      <>
     <Navbar />
      <Container className="mb-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={ <About />} />
        </Routes>
        </Container>
        </>
    </div>
  )
}

export default App
