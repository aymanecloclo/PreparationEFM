import Stagiare from "./components/Stagiaire"
import ListStagiaire from "./components/ListStagiaire";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailsStagiaires from "./components/DetailsStagiaires";
export default function App() {
  return (
   <>  
         <Navbar/>
          <Router>
         
           <Routes>
             <Route path='/' element={< ListStagiaire/>}/>
             <Route path='detailsStagire/:nomStagire' element={<DetailsStagiaires/>}/>
           </Routes>
          
          </Router>         
   </>
  );
}
