
import  Link from 'next/link'
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from '../index';




const navItems = [
    { path:'/about' , text: 'About'  },
     {path:'/pricing' , text: 'Pricing'} ,       
    { path:'/contact' , text: 'Contact'  }
   ]



export const Navbar = () => {
 
 
 
    return (
     <nav className='flex bg-stone-800  p-2 m-2 rounded' > 
      <Link  href="/"  className='flex items-center  text-white text-xl'  > 
      <HomeIcon className='mr-2'/>
       Home 
       </Link>

      <div className='flex flex-1'>

   { navItems.map( navItem => ( 
   <ActiveLink key={navItem.path} {...navItem}  />

   )  )  };

   
     
      </div>

     </nav>
  )
}
