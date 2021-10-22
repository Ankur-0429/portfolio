import styles from '../../styles/contact.module.css'
import 'font-awesome/css/font-awesome.min.css';

const contact = () => {
    return (<main className={styles.main}>
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h4>Contact</h4>
                <div className={styles.iconText}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>(916)-846-8959</span>
                </div>
                <div className={styles.iconText}>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>ahir.ankur0429@gmail.com</span>
                </div>
                <div className={styles.iconText}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Santa Cruz, CA</span>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.iconCircle}>
                        <i className={styles.icon}></i>
                    </a>
                </div>
            </div>
            <form className={styles.form}>
                <p>test</p>
            </form>
        </div>
    </main>)
}

export default contact