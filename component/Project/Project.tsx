import styles from '../../styles/project.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux';

const project = ({ name, image, url, detail }: any) => {
    // @ts-ignore
    const theme = useSelector(state=>state.swapTheme)
    return (<>
        <div className={styles.profile} style={{backgroundColor: `${theme? '#fff': '#262626'}`}}>
            {/* <div className={styles.popIcon}>
                <Image src={svg} layout="fixed" width={20} height={20} />
            </div> */}


            <a href={url} target="_blank" >
                <Image src={`${image}`} layout="fixed" width={200} height={100} className={styles.image} />
            </a>



            <h3 className={styles.name}>{name}</h3>
            <p className={styles.detail}>{detail}</p>
        </div>
    </>)
}

export default project