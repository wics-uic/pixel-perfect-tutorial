import styles from "./LandingPage.module.css"
import panda from "../assets/panda.png"
import Projects from "./Projects"

function LandingPage() {
    return (
        <div>
            <div className={styles['landing-container']}>
                {/* We should also have a navigation bar for all our different pages - Check Components to see a NavBar that is already made for you */}
                <div className={styles['main-container']}>
                    <div className={styles['landing-left']}>
                       {/* Let's fill this flex box with our name and credentials! */}
                    </div>

                    {/* This is the image of the panda that you already see on your website */}
                    <div className={styles['landing-right']}>
                        <img src={panda} alt="Logo" width={400} />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LandingPage