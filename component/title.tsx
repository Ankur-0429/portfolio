import { Parallax } from "react-scroll-parallax"
import styles from '../styles/project.module.css'

const Title = ({name}:any) => {
    return (
        <div style={{ width: '100%', marginBottom: '30px' }} className={styles.title}>
            <Parallax translateX={[0,0]} translateY={[0, 0]}>
                <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'<h1>'}</h1>
                <h1 className={styles.name}>
                    {name}
                </h1>
                <div style={{width: '15%'}}>
                    <Parallax translateX={[590, 590]}>
                        <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'</h1>'}</h1>
                    </Parallax>
                </div>
            </Parallax>
        </div>
    )
}

export default Title