import React from 'react';
import styles from '../../styles/person.module.css'
import TypeWriter from './TypeWriter';


const Person = () => {
    return (<>
        <div className={styles.diagonalBox}>
            <div className={styles.content}>
                <h1 className={`${styles.intro}`}>
                    Hi,<br />I'm Ankur,<br /> <TypeWriter />Developer
                </h1>
            </div>
        </div>
    </>)
}

export default Person