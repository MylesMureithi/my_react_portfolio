import dayjs from 'dayjs'
import './Footer.css'

function Footer() {
    return(
        <div className="footer">
            <p>{/* Add Icon */} {dayjs().year()} Myles M. All rights reserved.</p>
        </div>
    );
}

export default Footer;