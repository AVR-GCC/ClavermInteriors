import TitleBar from "./components/titleBar";
import styles from '../styles/Home.module.css';
import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const ContactLine = ({ icon, text, onClick }) => (
    <div className={styles.contactLine} onClick={onClick}>
        <div className={styles.contactIcon}>
            {icon}
        </div>
        <div className={styles.contactText}>
            {text}
        </div>
    </div>
);

const Contact = () => {
    return (
        <div>
            <TitleBar />
            <div className={styles.bottomSection}>
                <div className={styles.contactTitle}>
                    Contact
                </div>
                <ContactLine
                    icon={<FaPhone />}
                    text={'+254792414667, +254715331708'}
                />
                <ContactLine
                    icon={<MdMail />}
                    text={'claverminteriors@gmail.com'}
                />
                <ContactLine
                    icon={<BsFacebook />}
                    text={'Claverm Interiors'}
                    onClick={() => {
                        window.open('https://www.facebook.com/people/Claverm-Interior/100063714871819/?mibextid=ZbWKwL', '_blank');
                    }}
                />
                <ContactLine
                    icon={<BsInstagram />}
                    text={'Claverm Interiors'}
                />
            </div>
        </div>
    )
};

export default Contact;