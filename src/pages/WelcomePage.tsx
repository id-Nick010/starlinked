import {useState} from 'react'
import starlinkedLogo from '../assets/starlinked_logo.svg'
import Modal from '../components/Modal'

function WelcomePage () {
    const [isModalOpen, setModalOpen] = useState(false);
    
    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row w-full justify-between'>
                <h2 className='font-sarabun self-start text-4xl italic w-2/4'>Welcome to</h2>
                <div className=' h-1 bg-white my-4 w-2/4'></div>
            </div>
            <img src={starlinkedLogo} alt='starlinked logo' className='h-40 w-auto'/>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-lg text-gray-700 font-bold">Hello, Nickolo!</h2>
                <p className='text-gray-600'>This is where you type the code link for a study session that's already created.</p>
                
            </Modal>
            <div className='flex flex-col space-y-3 mt-20'>
                <button onClick={()=> setModalOpen(true)} className='px-5 font-sarabun bg-transparent text-3xl'>join a space</button>
                <button className='px-5 font-sarabun bg-transparent text-3xl'>create a space</button>
                <button className='px-5 font-sarabun bg-transparent text-3xl'>about</button>
            </div>
        </div>
    );
}

export default WelcomePage;