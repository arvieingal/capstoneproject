import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate' ,handleLocationChange)
    }
  }, [])


  return (
    <nav className='border-2 border-black flex flex-row justify-between h-16 xl:h-28 items-center w-screen'>
        <div className='ml-5 xl:ml-10 h-full'>
            <img src="./images/logo.png" alt="LOGO" className='h-10 w-11 xl:h-[100%] xl:w-[100%] cursor-pointer'/>
        </div>
        <div className='flex justify-between w-1/2 text-[10px] xl:text-[24px]'>
            <a href='/dashboard' className={currentPath === '/dashboard' ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline text-[#035195]'}>Home</a>
            <a href='/event' className={currentPath === '/event' ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline text-[#035195]'}>Events</a>
            <a href='/resources' className={currentPath === '/resources' ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline text-[#035195]'}>Resources</a>
            <a href='/getinvolved' className={currentPath === '/getinvolved' ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline text-[#035195]'}>Get Involved</a>
            <a href='/faqs' className={currentPath === '/faqs' ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline text-[#035195]'}>FAQs</a>
        </div>
        <div className='mr-5 xl:mr-10'>
            <a href="/profile"><img src="./images/profile.png" alt="user profile" className='w-7 h-7 xl:w-14 xl:h-14 cursor-pointer' /></a>
        </div>
    </nav>
  )
}

export default Navbar