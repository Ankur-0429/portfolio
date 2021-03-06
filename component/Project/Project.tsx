import styles from '../../styles/project.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import colors from '../utils/globals';

const project = ({ name, image, url, detail }: any) => {
    // @ts-ignore
    const theme = useSelector(state=>state.swapTheme)
    return (<>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.profile} style={{backgroundColor: `${theme? colors.white: colors.darkGrey}`}}>
            <a href={url} target="_blank" >
                <Image src={`${image}`} layout="fixed" width={250} height={100} className={styles.image} />
            </a>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.detail}>{detail}</p>
        </div>
    </>)
}

export default project