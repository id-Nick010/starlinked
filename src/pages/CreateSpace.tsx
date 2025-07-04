import DefaultButton from "../components/DefaultButton";
import { useNavigate } from "react-router-dom";

function CreateSpace() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <h1>Create Space Page</h1>
            <DefaultButton textSize="md" onClick={() => navigate('/')} label='Go back'/>
        </div>
    )
}

export default CreateSpace;