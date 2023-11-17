import React from 'react'
import logo from '../../assets/smug_ticket.png'
function GoogleRegister() {
  return (
    <>
    <div className="flex justify-center bg-[#E3C4A8] items-center h-screen">
        <div className="max-w-md mx-auto bg-[#F1F1F1F1] p-8 rounded-lg shadow-2xl text-center">
          <h2 className="text-2xl font-bold">Smug Ticket</h2>
          <h2 className="text-xl font-bold">Sing Up</h2>
          <div>
            <img src={logo} alt="logo" className="w-64" />
          </div>
          <div className="bg-mustard rounded-lg">
            este es el div del boton
          </div>
        </div>
      </div>
      </>
  )
}

export default GoogleRegister