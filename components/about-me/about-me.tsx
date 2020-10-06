import styles from './about-me.module.css'

export default function AboutMe () {
    // console.log(avatar);
    return (
        <section className={`${styles["about-me"]}`}>
            <div className={`container ${styles["about-me-block"]}`}>
                <img className={`${styles.avatar}`} src={`${process.env.API_URL}/api/pictures/avatar.jpg`} />
                <h1 className={`${styles["about-me-title"]} light-text`}>Hi, my name is Michael Medvediev :)</h1>
                <div className={`${styles["divider-custom"]} ${styles["divider-light"]}`}>
                    <div className={styles['divider-custom-line']}></div>
                    <img className={styles['react-icon']} src={`${process.env.API_URL}/api/pictures/react.png`}/>
                    <div className={styles['divider-custom-line']}></div>
                </div>
                <h4 className={styles.title}>Software Engineer - Web Developer - Musician</h4>
            </div>
        </section>
    );
};

