import styles from './ProductView.module.css';

type ProductViewProps = {
    textBlack?: boolean;
    title: string;
    pricing?: string;
    info?: string;
    video?: string;
    image?: string;
    gradient?: boolean;
}

export const ProductView = ({textBlack, title, pricing, info, video, image, gradient=false}: ProductViewProps) => {
    return (
        <div className={`${styles.container} ${textBlack ? styles.blackText : styles.textWhite}`}>
            {gradient && <div className={styles.gradient}></div>}
            {video && <video className={styles.media} src={video} autoPlay loop muted></video>}
            {image && <img className={styles.media} alt={title} src={image}></img>}
            <div className={styles.productInfo}>
                <span className={styles.title}>{title}</span>
                <span className={styles.pricing}>{pricing}</span>
                <span className={styles.info}>{info}</span>
            </div>
        </div>
    )
}