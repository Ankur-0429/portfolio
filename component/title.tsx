import { Parallax } from "react-scroll-parallax"
import styles from '../styles/project.module.css'

const Title = ({name}:any) => {
    return (
        <div style={{ width: '100%', marginBottom: '30px' }} className={styles.title}>
            <Parallax x={[0,0]} y={[0, 0]} tagInner="h1">
                <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'<h1>'}</h1>
                <h1 className={styles.name}>
                    {name}
                </h1>
                <div style={{width: '15%'}}>
                    <Parallax x={[590, 590]} tagInner="h1">
                        <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'</h1>'}</h1>
                    </Parallax>
                </div>
            </Parallax>
        </div>
    )
}

export default Title