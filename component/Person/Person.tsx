import React from 'react';
import styles from '../../styles/person.module.css'
import TypeWriter from './TypeWriter';


const Person = () => {
    return (<>
        <h1 className={`${styles.intro}`}>
            Hi,<br/>I'm Ankur,<br/> <TypeWriter/>Developer
        </h1>
    </>)
}

export default Person