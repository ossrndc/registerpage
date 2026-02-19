import React from 'react'
import Name from './pages/Name'
import Contact from './pages/Contact'
import Payment from './pages/Payment'
import Registered from './pages/Registered'
import { Route, Routes } from 'react-router-dom'
import Closed from './pages/Closed'
import Test from './pages/Test'

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/payment" element={<Payment />} />
         <Route path="/registered" element={<Registered />} />
         <Route path="/test" element={<Test />} />
         <Route path="/closed" element={<Closed />} />
      </Routes> */}
      {/* <Test /> */}

        <Closed />
        {/* <Registered />  */}
       {/* <Contact/>
      <Payment />
     

      <Test />
      < Closed /> */}
    </div>
  )
}

export default App
