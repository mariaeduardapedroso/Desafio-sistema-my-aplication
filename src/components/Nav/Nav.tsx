import Button from 'components/Button/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';


const Nav = () => {
  let Links = [
    { name: "Preços", link: "/Planos" },
    { name: "Fale conosco", link: "https://api.whatsapp.com/send?phone=5518996403582" },
    { name: "Iniciar sessão", link: "/Login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className='shadow-md w-full top-0 left-0'>
      {/* fixed */}
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <Link to="/">
            <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
              <img src={Logo} alt="Logo da marca" className='w-8' />
              <p className='p-2'>Org Project</p>
            </div>
          </Link>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link to={link.link} className='text-gray-800 hover:text-pink-400 duration-500'>{link.name}</Link>
                  {/* <a href={link.link} className='text-gray-800 hover:text-pink-400 duration-500'>{link.name}</a> */}
                </li>
              ))
            }
            <Link to="/Login/Cadastrar">
              <Button>
                Quero Utilizar!
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav