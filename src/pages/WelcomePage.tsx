import {useState} from 'react'
import starlinkedLogo from '../assets/starlinked_logo.svg'
import Modal from '../components/Modal'
import '../styles/welcomepage.css'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../components/DefaultButton'
import Starfield from '../components/StarField'

function WelcomePage () {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    return (
        <div className="welcome-container">
            <Starfield/>
            <div className="">
                <div className='flex flex-row w-md justify-between'>
                    <h2 className='font-sarabun font-thin italic font-it self-start text-4xl w-2/4'>Welcome to</h2>
                    <div className=' h-1 bg-white my-4 w-2/4'></div>
                </div>
                <img src={starlinkedLogo} alt='starlinked logo' className='h-40 w-auto animate-breath'/>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-lg text-gray-700 font-bold">Made by Klydo Studio</h2>
                <p className='text-gray-600'>Starlinked: Focus together, from anywhere. A cozy virtual space for deep work, shared moments, and Pomodoro-powered productivity, with friends, partners, or your team.</p>
            </Modal>
            <div className='wel-button-container'>
                <DefaultButton label='join a space'/>
                <DefaultButton onClick={() => navigate('/createSpace')} label='create a space'/>
                <DefaultButton onClick={()=> setModalOpen(true)} label='about'/>
            </div>
        </div>
    );
}

export default WelcomePage;