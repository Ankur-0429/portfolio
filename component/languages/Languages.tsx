import styles from '../../styles/project.module.css'
import Title from '../title'
import Language from './Language'

export default function Languages({ data }: any) {
    return (<>
        <Title name={"Toolbelt"} />
        <div className={styles.container} style={{padding: 50}}>
            {data.map((e: any) => {
                return <Language image={e.image} />
            })}
        </div>
    </>)
}