import Link from 'next/link'
export default function Header(){
  return(
    <div className='main flex justify-around items-center bg-blue-900 h-20 '>
      <div className="log0 flex items-centre flex-wrap justify-center b">
     <img
     src="https://image.similarpng.com/very-thumbnail/2021/09/AB-abstract-logo-design-on-transparent-background-PNG.png"
     alt="logo"
     className='w-10 h-10'
     />
     <span className="ml-4 mt-3 items-center text-white">ASMA memon</span>

     
      </div>
    <div className='menu'>
<ul className='flex items-center space-x-4 text-white'>
   <Link href="/"> <li>Home</li></Link> 
   <Link href="/about-us"> <li>About us</li></Link> 
   <Link href="/contact-us"> <li>contact us</li></Link> 
  </ul>
</div>
<div className="button inline-flex bg-white itens-centre border-0 py-1 px-3 hover:bg-black hover:text-white rounded-2xl 
">
<a href="https://github.com/asmabibi97" target="_blank" rel="noopener noreferrer">
  <button className="px-4 py-2 rounded">
    GitHub Link
  </button>
</a>

</div>
</div>
  )
}
