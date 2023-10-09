import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from '.../../../src/Component/Users'
import UpdateUser from '.../../../src/Component/UpdateUser'
import CreateUser from '.../../../src/Component/CreateUser'
function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App