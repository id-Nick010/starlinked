import NavBar from "../components/NavBar";

function CreateSpace() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <NavBar/>
            <main className='grid grid-col-2 gap-10 text-3xl w-3/4 text-gray-300 font-sarabun font-light'>
                <h2 className=''>What do you want to name your space?</h2>
                <input className="col-start-2 row-start-2 outline-none" type='text' placeholder='Please enter your space name...'/>
                <h2 className="row-start-3">That's a good one!<br/>what's your name btw?</h2>
                <input className='col-start-2 row-start-4 outline-none' type='text' placeholder='Please enter your name...'/>
                <h2 className="row-start-5">Nice to meet you your-name-here !</h2>
                <h2 className="row-start-6">Please wait for a moment...</h2>
                <h2 className="row-start-7">I'm done creating your space. Enjoy your stay~</h2>
            </main>
        </div>
    )
}

export default CreateSpace;