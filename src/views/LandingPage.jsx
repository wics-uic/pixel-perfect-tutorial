import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
        <div className={styles['main-container']}>

            <div className={styles['landing-left']}>
                <h2>hello</h2>
                <h1>i'm nandana sheri</h1>
                <h2>software engineer, NLP enthusiast</h2>
            </div>

            <div className={styles['landing-right']}>
                <h2>hello</h2>
                <h2>i'm nandana sheri</h2>
                <h2>software engineer, NLP enthusiast</h2>
            </div>
        </div>
    )
}

export default LandingPage