import { Navbar } from '../components/index';

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