import Link from 'next/link';
import styles from './styles.module.css'
import Vector from './Vector.svg';

type Props= {
    backHref: string;
    color: string
    title?: string
    subtitle?: string
}


export const Header = ({backHref, color, title, subtitle}: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Link href={backHref}>
                   <Vector color={color}/>
                </Link>
            </div>
            <div className={styles.center}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div> 
            </div>
            <div className={styles.rightSide}>
                
            </div>
        </div>
    )
}




