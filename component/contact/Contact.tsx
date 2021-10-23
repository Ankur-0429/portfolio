import styles from '../../styles/contact.module.css'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';
import colors from '../utils/globals';

const contact = () => {
    // @ts-ignore
    const theme = useSelector(state=>state.swapTheme)
    return (<main className={styles.main}>
        <div className={styles.contactContainer} style={{backgroundColor: `${theme? colors.white : colors.darkGrey}`}}>
            <div className={styles.contactInfo}>
                <h4>Contact</h4>
                <div className={styles.iconText}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>(916)-846-8959</span>
                </div>
                <div className={styles.iconText}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{fontSize: '1.7rem'}}></i>
                    <span>ahir.ankur0429@gmail.com</span>
                </div>
                <div className={styles.iconText}>
                    <i className="fa fa-map-marker" aria-hidden="true" style={{paddingLeft: '5px'}}></i>
                    <span>Santa Cruz, CA</span>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.iconCircle}>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="#" className={styles.iconCircle}>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#" className={styles.iconCircle}>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <form className={styles.form}>
                <div className={styles.colTwo}>
                    <div className={styles.formGroup}>
                        <label>Name </label>
                        <input type="text" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email </label>
                        <input type="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label style={{paddingRight: '48px'}}>Subject</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                        <label style={{paddingRight: '48px'}}>Message</label>
                        <textarea />
                    </div>
            </form>
        </div>
    </main>)
}

export default contact