import { useState } from 'react'
import Separator from "./components/separator"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Footer />
    </>
  )
}

export default App
