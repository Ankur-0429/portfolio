import Project from "./Project"
import styles from '../../styles/project.module.css'
import Title from "../title";

const projects = ({ data }: any) => {
    return (<>

        <Title name={"Projects 📈"} />
        
        <div className={styles.container}>
            {data.map((e: any) => {
                return <Project key={e.name} name={e.name} image={e.image} url={e.url} detail={e.detail} />
            })}
        </div>
    </>)
}

export default projects