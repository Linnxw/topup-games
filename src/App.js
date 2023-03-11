import {Routes,Route} from "react-router-dom"
import Invoice from "./Page/Invoice.js"
import './App.css';
import Home from "./Page/Home.js"
import Topup from "./Page/TopUp.js"
function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/:topup" element={<Topup/>}/>
     <Route path="/invoice" element={<Invoice/>}/>
    </Routes>
  );
}

export default App;
