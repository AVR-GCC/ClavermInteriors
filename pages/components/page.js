import styles from '../../styles/Home.module.css';
import TitleBar from './titleBar';
import Footer from './footer';

const Page = ({ children }) => {
    return (
        <div>
            <TitleBar />
            <div className={styles.bottomSection}>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Page;