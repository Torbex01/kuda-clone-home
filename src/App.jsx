import Home from "./pages/Home"
import styled from "styled-components"
import { IoIosHome } from "react-icons/io";
import Header from "./static/Header";
import Footer from "./static/Footer";
const App = ()=>{
  return(
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>

  )
}
export default App


