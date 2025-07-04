import {Outlet} from 'react-router-dom'
import Starfield from '../components/Starfield';

export default function Layout() {
    return (
        <div className='min-h-screen min-w-screen bg-linear-to-b from-grad-blue via-grad-light-blue to-grad-violet'>
            <Starfield />
            <Outlet/>
        </div>
    );
}