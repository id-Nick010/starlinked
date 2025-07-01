import {useState} from 'react'
import starlinkedLogo from '../assets/starlinked_logo.svg'
import Modal from '../components/Modal'
import '../styles/welcomepage.css'

function WelcomePage () {
    const [isModalOpen, setModalOpen] = useState(false);
    
    return (
        <div className="welcome-container">
            <div className='flex flex-row w-md justify-between'>
                <h2 className='font-sarabun self-start text-4xl italic w-2/4'>Welcome to</h2>
                <div className=' h-1 bg-white my-4 w-2/4'></div>
            </div>
            <img src={starlinkedLogo} alt='starlinked logo' className='h-40 w-auto'/>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-lg text-gray-700 font-bold">Hello, Nickolo!</h2>
                <p className='text-gray-600'>This is where you type the code link for a study session that's already created.</p>
            </Modal>
            <div className='wel-button-container'>
                <button onClick={()=> setModalOpen(true)} className='wel-button'>join a space</button>
                <button className='wel-button'>create a space</button>
                <button className='wel-button'>about</button>
            </div>
        </div>
    );
}

export default WelcomePage;