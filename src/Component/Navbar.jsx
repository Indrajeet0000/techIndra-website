import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
      const [mobileOpen, setMobileOpen] = React.useState(false)
      const navigate = useNavigate()
      
  return (
    <div><nav className="flex flex-col items-center w-full " >
            <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-5 w-full">
                <a href="https://indrajeet028805@gmail.com">
                    <h1 className=' text-3xl text-blue-100'>TechIndra</h1>
                </a>
                <div id="menu" className={`${mobileOpen ? 'max-md:flex' : 'max-md:hidden'} max-md:fixed max-md:top-0 max-md:z-10 max-md:left-0 max-md:w-full max-md:h-screen max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm border border-white/15 hover:border-white/30 transition-colors px-9 py-4 md:rounded-full`}>
                    <a href="/" onClick={() => setMobileOpen(false)} className="text-white hover:text-white/90">Resources</a>
                    
                    <a href="/" onClick={() => setMobileOpen(false)} className="text-white hover:text-white/90">Clients</a>
                    <Link to={"/Services"} onClick={() => setMobileOpen(false)} className="text-white hover:text-white/90">Services</Link>

                    <Link to={"/Faq"} onClick={() => setMobileOpen(false)} className="text-white hover:text-white/90">FAQS</Link>
                 
                    <Link to={"/Pricing"} onClick={() => setMobileOpen(false)} className="text-white hover:text-white/90">Pricing</Link>
            
                    
                    <button  id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button> 
                </div>
                <button onClick={() => navigate("/Call") }onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}  className='bg-linear-to-r from-[#0000FF]/20 to-[#800080]/10 border border-white/15 hover:border-white/30 hidden md:flex items-center gap-3 px-2 py-1 pr-4 rounded-full transition-cursor cursor-pointer'>
                    <div className='size-10 rounded-full border-2 border-[#7E69B5] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                    </div>
                    <span  className="text-slate-100 text-sm">
                        Book a call
                    </span>
                </button>

                <button id="open-menu" onClick={() => setMobileOpen(true)}
                    className="md:hidden bg-gray-900 hover:bg-gray-800 text-gray-50 p-2 rounded-md aspect-square font-medium transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 12h16" /> <path d="M4 18h16" /> <path d="M4 6h16" /> </svg>
                </button>
            </div>
        </nav></div>
  )
}

export default Navbar