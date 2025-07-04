import {useState} from 'react'
import starlinkedLogo from '../assets/starlinked_logo.svg'
import Modal from '../components/Modal'
import '../styles/welcomepage.css'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../components/DefaultButton'
import Starfield from '../components/Starfield'

function WelcomePage () {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    return (
        <div className="welcome-container">
            <Starfield/>
            <div className="intro-container">
                <div className='flex flex-row w-full justify-between'>
                    <h2 className='font-sarabun font-thin italic font-it self-start text-4xl w-1/2'>Welcome to</h2>
                    <div className=' h-[0.12em] bg-white mt-6 my-4 w-1/2'></div>
                </div>
                <img src={starlinkedLogo} alt='starlinked logo' className='h-30 w-auto animate-breath'/>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-lg text-white font-bold">Made by Klydo Studio</h2>
                <p className='text-gray-100 text-center text-md font-extralight'>Starlinked: Focus together, from anywhere. A cozy virtual space for deep work, shared moments, and Pomodoro-powered productivity, with friends, partners, or your team.</p>
            </Modal>
            <div className='wel-button-container'>
                <DefaultButton textSize="3xl" label='join a space'/>
                <DefaultButton textSize="3xl" onClick={() => navigate('/createSpace')} label='create a space'/>
                <DefaultButton textSize="3xl" onClick={()=> setModalOpen(true)} label='about'/>
            </div>
        </div>
    );
}

export default WelcomePage;