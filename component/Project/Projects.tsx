import Project from "./Project"
import styles from '../../styles/project.module.css'
import { Parallax } from 'react-scroll-parallax';

const projects = ({ data }: any) => {
    return (<>
        <div style={{ width: '100%', marginBottom: '30px' }} className={styles.title}>
            <Parallax x={[0,0]} y={[0, 0]} tagInner="h1">
                <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'<h1>'}</h1>
                <h1 id="projects">
                    Other Projects
                </h1>
                <div style={{width: '15%'}}>
                    <Parallax x={[630, 630]} tagInner="h1">
                        <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'</h1>'}</h1>
                    </Parallax>
                </div>
            </Parallax>
        </div>
        <div className={styles.container}>
            {data.map((e: any) => {
                return <Project key={e.name} name={e.name} image={e.image} url={e.url} detail={e.detail} />
            })}
        </div>
    </>)
}

export default projects