import styles from './NavBar.module.css'

const NavData = [ 
    {
        title: "about",
        path: "#",
        id: 1
    },
    {
        title: "experience",
        path: "#",
        id: 2
    },
    {
        title: "projects",
        path: "#projects",
        id: 3
    },
    {
        title: "fun stuff",
        path: "#",
        id: 4
    }
]
export default function Navbar() {
    return (
        <div className={styles['main-nav']}>
            {NavData.map((item) => {
              return (
                <span className={styles['nav-item']} key={item.id}>
                  <a style={{ textDecoration: 'none' }} href={item.path}>
                    <span className={styles['nav-item']}>{item.title}</span>
                  </a>
                </span>
              )
            })}
        </div>
    ) 
}