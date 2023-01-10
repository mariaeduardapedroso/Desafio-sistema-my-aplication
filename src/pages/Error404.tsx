import Button from '../components/Button/button';
import Logo from '../components/images/Org Project.gif';

export default function Error404() {

    return (
        <div className=' bg-pink-400 flex flex-col justify-center items-center'>

            <p className='text-gray-100 font-bold text-5xl text-center mt-28'>
                ERROR 404
            </p>
 
            <img src={Logo} alt="Logo da marca" className='w-1/3' />

            <p className='text-white text-center'>
                Ops! Parece que esse projeto foi apagado.
            </p>

            <div className='mb-8'>
            <Button>Voltar a pagina inicial</Button>
            </div>
        </div>
    );
}