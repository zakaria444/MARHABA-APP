import './App.css';
import {Routes,Route} from "react-router-dom"

import NavigationBar from './Home/NavigationBar';

import Signin from './Authenticated/Signin';
import Signup from './Authenticated/Signup';

import Home from './Home/Home';



function App() {
  return (
    <div className="App">
      {<NavigationBar/>}
<Routes>
  <Route path='/signin' element={<Signin/>} />
  <Route path='/signup' element={<Signup/>} />
</Routes>
<Routes>
  <Route path='/' element={<Home/>} />
</Routes>

    </div>
  );
}

export default App;
