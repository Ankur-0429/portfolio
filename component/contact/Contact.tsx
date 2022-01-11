import styles from '../../styles/contact.module.css'
import buttonStyles from '../../styles/contact.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';
import colors from '../utils/globals';
import { useState } from 'react';
import { ArrowUpwardRounded } from '@material-ui/icons';
import Link from 'next/link';

const contact = () => {
    // @ts-ignore
    const theme = useSelector(state => state.swapTheme)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [animation, setAnimation] = useState(`${buttonStyles.subButton}`)

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        setSubmitted(true)

        let data = {
            name,
            email,
            subject,
            message
        }

        let temp = animation
        setAnimation(animation + ` ${buttonStyles.loading}`)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
                setSubmitted(false)
                setTimeout(() => {
                    setAnimation(temp + ` ${buttonStyles.ready}`)
                }, 1000);
                setTimeout(() => {
                    setAnimation(temp)
                }, 3000);
            }
        })
    }

    return (<>
        <main className={styles.main} id="contacts">
            <div className={styles.contactContainer} style={{ backgroundColor: `${theme ? colors.white : colors.darkGrey}` }}>
                <div className={styles.contactInfo}>
                    <h4>Contact</h4>
                    <div className={styles.iconText}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>(916)-846-8959</span>
                    </div>
                    <div className={styles.iconText}>
                        <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: '1.7rem' }}></i>
                        <span>ahir.ankur0429@gmail.com</span>
                    </div>
                    <div className={styles.iconText}>
                        <i className="fa fa-map-marker" aria-hidden="true" style={{ paddingLeft: '5px' }}></i>
                        <span>Santa Cruz, CA</span>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href="https://github.com/Ankur-0429" target="_blank" className={styles.iconCircle}>
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ankur-ahir-93b041211/" target="_blank" className={styles.iconCircle}>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/ankur_ahir88/" target="_blank" className={styles.iconCircle}>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                {/* @ts-ignore */}
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.colTwo}>
                        <div className={styles["formGroup"] + " " + styles["line"]}>
                            <label>Name </label>
                            <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
                        </div>
                        <div className={styles["formGroup"] + " " + styles["line"]}>
                            <label>Email </label>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                        </div>
                        <div className={styles["formGroup"] + " " + styles["line"]}>
                            <label style={{ paddingRight: '48px' }}>Subject</label>
                            <input type="text" onChange={(e) => { setSubject(e.target.value) }} value={subject} />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label style={{ paddingRight: '48px' }}>Message</label>
                        <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} />
                    </div>
                    <div className={buttonStyles.subBody}>
                        <button type="submit" className={animation}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
        <div
            style={{display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: 'auto', marginRight: 'auto', width: 60, height: 60, borderRadius: 30, backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.2)', cursor: 'pointer', marginBottom: 20}}>
            <Link href="#home">
                <div style={{margin: 'auto', color: 'black'}}>
                    <ArrowUpwardRounded fontSize="large" />
                </div>
            </Link>
        </div>
    </>)
}

export default contact