import Navbar from "../components/NavBar"
import styles from "./LandingPage.module.css"
import panda from "../assets/panda.png"

function LandingPage() {
    return (
        <div>
            <div className={styles['landing-container']}>
                <Navbar/>
                <div className={styles['main-container']}>
                    <div className={styles['landing-left']}>
                       
                    </div>

                    <div className={styles['landing-right']}>
                        <img src={panda} alt="Logo" width={400} />
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default LandingPage