import './App.css';

import {Routes,Route} from "react-router-dom"

import NavigationBar from './Home/NavigationBar';

import Signin from './Authenticated/Signin';

import Signup from './Authenticated/Signup';

import Home from './Home/Home';

import Dashbordadmin from './Admin/Dashbordadmin';

import RepasDetail from './Admin/RepasDetail';



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

      <Routes>

      <Route path='/dashbordadmin' element={<Dashbordadmin/>} />
      <Route path='/repasdetail/:repasId' element={<RepasDetail/>} />


      </Routes>

    </div>
  );
}

export default App;
