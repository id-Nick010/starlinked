import NavBar from "../components/NavBar";

function CreateSpace() {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen">
            <NavBar />
            <h1>Create Space Page</h1>
            <section className=''>
                <h2>What do you want to name your space?</h2>
                <input type='text' placeholder='Please enter your space name...'/>
            </section>
            <section className="">
                <h2>That's a good one!<br/>what's your name btw?</h2>
                <input type='text' placeholder='Please enter your name...'/>
            </section>
            <section className="">
                <h2>Nice to meet you your-name-here !</h2>
                <h2>Please wait for a moment...</h2>
                <h2>I'm done creating your space. Enjoy your stay~</h2>
            </section>
        </div>
    )
}

export default CreateSpace;