import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';


const Menu = () => {
  let Links = [
    { name: "Inicio", link: "/DashBoard" },
    { name: "Perfil", link: "/DashBoard/Perfil" },
    { name: "Equipe", link: "/DashBoard/Equipe" },
  ];
  let [open, setOpen] = useState(false);
  return (
    // shadow-md
    <div className='w-full top-0 px-9'>
      <div className='items-center  bg-white py-4'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <img src={Logo} alt="Logo da marca" className='w-8' />
          <p className='p-2'>Org Project</p>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>

        </div>

        <ul className={` bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-xl'>
                <Link to={link.link} className='text-gray-800 hover:text-pink-400 duration-500'>{link.name}</Link>
                {/* <a href={link.link} className='text-gray-800 hover:text-pink-400 duration-500'>{link.name}</a> */}
              </li>
            ))
          }

        </ul>

        <div className='absolute bottom-4'>
          <ul className={` bg-white  w-full  transition-all duration-500'}`}>

            <li className='text-xl'>

              <a href="/" className='text-gray-800 hover:text-pink-400 duration-500'>Deslogar</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu