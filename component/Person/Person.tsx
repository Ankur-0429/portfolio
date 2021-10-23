import React, { useEffect } from 'react';
import { useState } from "react";
import styles from '../../styles/person.module.css'

const textArray = ['NodeJS', 'React', 'Angular', 'NextJS', 'Python', 'Gradle', 'CSS', 'Software']
import { useSelector } from 'react-redux';


const Person  = () => {
    // @ts-ignore
    const theme = useSelector(state=>state.swapTheme)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
          setIndex((index+1)%(textArray.length))
        }, 3000);
        return () => clearTimeout(timer);
    });
    return (<>
       
        <h1 className={styles.intro}>Hi, <br/>I'm Ankur, <br/>{textArray[index]} developer</h1>
       
    </>)
}

export default Person