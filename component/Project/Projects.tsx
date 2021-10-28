import Project from "./Project"
import styles from '../../styles/project.module.css'
import { Parallax } from 'react-scroll-parallax';

const projects = ({ data }: any) => {
    return (<>
        <div style={{ width: '50%', marginBottom: '30px' }} className={styles.title}>
            <Parallax x={[50,50]} y={[0, 0]} tagInner="h1">
                <h1 className={styles.handWritten} style={{ fontSize: '1rem' }}>{'<h1>'}</h1>
                <h1 id="projects">
                    My Projects
                </h1>
                <div style={{ width: '30%'}}>
                    <Parallax x={[300, 300]} tagInner="h1">
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