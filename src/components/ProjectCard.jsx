import styles from './ProjectCard.module.css'
import chat from '../assets/chat.png'


export default function ProjectCard () {
    return (
        <div className={styles['main-container']}>
            <a href="example.com" style={{textDecoration:'none'}}>
            <h1>Sample Project</h1>
            </a>
            <img src={chat} width={500} className={styles['image']}/>
            <h4>Sample Project Description</h4>
        </div>
    )

}
    
