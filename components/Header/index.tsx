import Link from 'next/link';
import styles from './styles.module.css'
import Vector from './Vector.svg';

export const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Link href={''}>
                   
                </Link>
            </div>
            <div className={styles.center}>
                <div className={styles.title}>titulo</div>
                <div className={styles.subtitles}>sub titulo</div> 
            </div>
            <div className={styles.rightSide}>
                ...
            </div>
        </div>
    )
}




