import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
   <nav className='bg-gray-800 text-white p-4 flex justify-between'>
     <Link to='/' className='text-white text-lg font-bold'>Mi tienda</Link>
     <div>
       <Link to='/products' className='mx-2'>Productos</Link>
       <Link to='/cart' className='mx-2'>Carrito</Link>
       <Link to='/login' className='mx-2'>Iniciar sesión</Link>
       <Link to='/register' className='mx-2'>Registrarse</Link>
     </div>
   </nav>
 )
}

export default Navbar