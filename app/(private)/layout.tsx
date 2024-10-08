import { Navbar } from '@/app/components';

export default function AboutLayout( { 
    children}: {

    children: React.ReactNode; 
 }) { 


return ( 
  <>
  <Navbar />

      <div>
      
        {children}
      </div>
</>

)}