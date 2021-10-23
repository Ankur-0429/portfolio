import styles from '../../styles/contact.module.css'
import buttonStyles from '../../styles/contact.module.scss'
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from 'react-redux';
import colors from '../utils/globals';
import { useState } from 'react';

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
                console.log('test')
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
                }, 2000); 
            }
        })
    }

    return (<main className={styles.main}>
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
            {/* @ts-ignore */}
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.colTwo}>
                    <div className={styles.formGroup}>
                        <label>Name </label>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email </label>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    </div>
                    <div className={styles.formGroup}>
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
    </main>)
}

export default contact