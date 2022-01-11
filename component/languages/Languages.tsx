import styles from '../../styles/project.module.css'
import Title from '../title'
import Language from './Language'

export default function Languages({ data }: any) {
    return (<>
        <Title name={"Toolbelt 🧰"} />
        <div className={styles.container} style={{padding: 50}}>
            {data.map((e: any, index: any) => {
                return <Language key={index} image={e.image} />
            })}
        </div>
    </>)
}