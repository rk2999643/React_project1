
import './App.css';
import StaticPage from './Routes/StaticPage';
import { createContext } from 'react';



import AppRoutes from './Utility/Routers';
// import Handle from './mock/Handle';

export let data = createContext();

function App() {
  // let name = "ratan";
  return (
    <div className="App">
   
      <AppRoutes/>
    {/* <StaticPage/>  */}
   
   {/* <data.Provider value={"Ratan"}/> */}
      
    </div>
  );
}

export default App;