import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Account from "./components/Account/Account"

const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/account" element={<Account></Account>} />
        <Route/>
      </Routes>
    </Router>
  )
}

export default App