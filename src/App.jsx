import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header/>
      <main className="min-h-[39rem]">
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
