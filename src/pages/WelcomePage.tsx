import starlinkedLogo from '../assets/starlinked_logo.svg'

function WelcomePage () {
    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row w-full justify-between'>
                <h2 className='font-sarabun self-start text-4xl italic w-2/4'>Welcome to</h2>
                <div className=' h-1 bg-white my-4 w-2/4'></div>
            </div>
            <img src={starlinkedLogo} alt='starlinked logo' className='h-40 w-auto'/>
            <div className='flex flex-col space-y-3 mt-20'>
                <button className='px-5 font-sarabun bg-transparent text-3xl'>join a space</button>
                <button className='px-5 font-sarabun bg-transparent text-3xl'>create a space</button>
                <button className='px-5 font-sarabun bg-transparent text-3xl'>about</button>
            </div>
        </div>
    );
}

export default WelcomePage;