import type { Metadata } from "next"


export const metadata:Metadata = { 
  title : "Pricing Page",
   description : "Esta es la pagina de pricing de mi servicio",
   keywords: ['Informacion' , 'About Page' , 'Obed']
}


export default function PricingPage() {


  return (
    <span className="text-7xl" >Pricing page</span>
  )
}
