import { Link } from 'react-router-dom';
import Button from '../Button/button';
import Logo from '../images/Org Project.gif';

export default function Error404() {

    return (
        <main>
            <div className=' bg-pink-400 flex flex-col justify-center items-center'>

                <h1 className='text-pink-200 font-bold text-5xl text-center mt-28'>
                    ERROR 404
                </h1>

                <img src={Logo} alt="Logo da marca" className='w-1/3' />

                <p className='text-white text-center'>
                    Ops! Parece que esse projeto foi apagado.
                </p>

                <div className='mb-8'>
                    <Link to="/">
                        <Button>Voltar a pagina inicial</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}