import React from "react";
import styles from '../styles/ToggleSwitch.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from './redux/action/index'

/**
 * 
 * @param label 
 * @param th
 * @returns 
 */
const ToggleSwitch = ({label}:any) => {
    // @ts-ignore
    const theme = useSelector(state=>state.swapTheme)
    const dispatch = useDispatch()
    return (
    <div className={styles.container}>
        {label}{" "}
        <div className={styles.toggleSwitch}>
            <input type="checkbox" className={styles.checkbox}
                name={label} id={label}  onClick={()=>dispatch(switchTheme())} />
            <label className={styles.label} htmlFor={label}>
                <span className={styles.inner} />
                <span className={styles.switch} />
            </label>
        </div>
    </div>
    )
}

export default ToggleSwitch