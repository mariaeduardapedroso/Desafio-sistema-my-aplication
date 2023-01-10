import Logo from '../components/images/Org Project.gif';

export default function Error404() {

    return (
        <div>
            <p className='text-gray-600 md:text-center top-5'>
                ERROR 404
            </p>
            <img src={Logo} alt="Logo da marca" className='w-40 top-5' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <img src={Logo} alt="Logo da marca" className='w-40' />
            <p className='text-white font-bold md:text-center'>
                Ops! Parece que esse projeto foi apagado.
            </p>
        </div>
    );
}