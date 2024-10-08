import type { Metadata } from 'next';


export const metadata:Metadata = { 
      title : "SEO title",
       description : "SEO description",
       keywords: ['Informacion' , 'About Page' , 'Obed']
}

export default function Aboutpage()  {


  return (
    <>
    <span className="text-7xl" >about page</span>
    </>
  )
}

