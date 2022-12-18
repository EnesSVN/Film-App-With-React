import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="flex flex-col h-screen mx-10">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
