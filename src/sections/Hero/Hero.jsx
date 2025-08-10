import styles from './HeroStyles.module.css';
import ii from '/ii.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
//import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

export default function Hero() {
  const {theme, toggleTheme } = useTheme();

   const themeIcon = theme === 'light'? sun : moon;
   const githubIcon = theme === 'light'? githubLight : githubDark;
   const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={ii} alt="Profile Picture of Emmanuel Chibuzor" className={styles.hero} />
        <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
          Emmanuel
          <br />
          Chibuzor
        </h1>
        <h2>Full-stack Software Engineer</h2>
        <span>
          <a href="http://www.linkedin.com/in/emmanuelchibuzor7" target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Imanuelchibuzor" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
           As a skilled Full-Stack Developer, I specialize in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I create dynamic and user-centric applications that deliver exceptional performance and seamless functionality.
        </p>
        {/*<a href={CV} download>
          <button className='hover'>
            Resume
          </button>
        </a>*/}
      </div>
    </section>
  )
}
