
import styles from "./styles.module.css"

type Props = {
    color: string
}

export const InputField = ({}: Props) => {
    return(
        <div className={styles.container}>
            <input type="text" />
        </div>
    );
    
}