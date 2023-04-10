import { FaHome, FaSearch, FaUserPlus } from 'react-icons/fa';
import {IoIosPeople} from 'react-icons/io';
import { Link, Outlet } from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import CreatePost from '../Pages/CreatePost';

const SideBar = () => {
 

    return (
        <div className='sideNav'>
            <ul className="nav flex-column text-start">
                <li className="nav-item">
                    <Link  to="/" style={{ textDecoration: 'inherit'}}><FaHome size="2rem"/>&nbsp; &nbsp;Home</Link>
                </li>
                <li className="nav-item">
                    <FaSearch size="2rem"/>&nbsp; &nbsp;Search
                </li>
                <li className="nav-item">
                    <Link  to="/CreatePost" style={{ textDecoration: 'inherit'}}><FaUserPlus size="2rem"/>&nbsp; &nbsp;Create a Team</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ReadPosts" style={{ textDecoration: 'inherit'}}><IoIosPeople size="2rem"/>&nbsp; &nbsp;Team Gallery</Link>   
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default SideBar;