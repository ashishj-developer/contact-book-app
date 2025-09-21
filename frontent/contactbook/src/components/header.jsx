import { IoBookOutline } from "react-icons/io5";
import './index.css'

const Header = () => {
    return (
        <div className="header">
            <div className="icon-container">
                <IoBookOutline className="BookIcon"/>
            </div>
            <div >
                <h1>Contact Book</h1>
                <p>Manage your contacts efficiently</p>
            </div>
        </div>
    );
}

export default Header;