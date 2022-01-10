import styles from '../../styles/project.module.css'
import Image from 'next/image'

export default function Language({image}:any) {
    return (<div className={styles.img}>
        <Image src={`${image}`} layout="fixed" width={100} height={100} />
    </div>)
}