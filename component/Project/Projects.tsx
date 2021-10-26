import Project from "./Project"
import styles from '../../styles/project.module.css'

const projects = ({data}:any) => {
    return (<>
        <h1 className={styles.title} id="projects">My Projects</h1>
        <div className={styles.container}>
            {data.map((e:any)=> {
                return <Project key={e.name} name={e.name} image={e.image} url={e.url} detail={e.detail} />
            })}
        </div>
    </>)
}

export default projects