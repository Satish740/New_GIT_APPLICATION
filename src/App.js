import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import About from "./pages/about"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import User from "./pages/User"
import { GithubProvider } from "./context/GithubContext"
import { AlertProvider } from "./context/Alert/AlertContext"

function App() {
  return (

    /*
    container is margin auto px-3 is padding x-axis pb-12 is padding bottom
     */

    <GithubProvider>   
      <AlertProvider>
    <Router>
      <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12' > 
      <Alert/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/user/:login" element={<User/>}></Route>
        <Route path="/notfound" element={<NotFound/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      </main>  
      <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  )
}
export default App