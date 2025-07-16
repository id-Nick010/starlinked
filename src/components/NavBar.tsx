import starlinkedLogo from '../assets/starlinked_logo.svg'
import { useNavigate } from 'react-router-dom'

export default function NavBar () {
    const navigate = useNavigate();
    return (
        <section className='flex justify-start items-start w-screen h-15 m-5'>
            <button onClick={() => navigate('/')}>
                <img src={starlinkedLogo} alt='starlinked logo button' className='h-10 w-auto ml-5'/>
            </button>
        </section>
    )
}