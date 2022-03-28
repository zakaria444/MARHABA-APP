import './App.css';
import {Routes,Route} from "react-router-dom"

import Signin from './Authenticated/Signin';
import Signup from './Authenticated/Signup';


function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/signin' element={<Signin/>} />
  <Route path='/signup' element={<Signup/>} />

</Routes>

    </div>
  );
}

export default App;
