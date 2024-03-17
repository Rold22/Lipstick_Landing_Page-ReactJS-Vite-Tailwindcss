
import Nav from "./components/Nav"
import { About, Contact, Footer, Hero, Product, Reviews } from "./page"

function App() {


  return (
    <>
      <div className=" sticky top-0 z-[200]">
        <Nav />
      </div>
      <div>
      <Hero />
      <About />
      <Product />
      <Reviews/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
