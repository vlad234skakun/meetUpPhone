import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../context/LanguageProvider.jsx'

import styles from './Header.module.css'

import EarthIcon from '../../icons/EarthIcon.jsx'
import Button from './Button/Button.jsx'

const Header = ()=>{
    const { language , handleLanguage } = useContext(LanguageContext)

    return(
        <>
        <header>
            <div className={styles.leftBlock} >
                <a href=""><img src="public\img\logoo.svg" alt="" /></a>
            </div>
            <div className={styles.rightBlock} >
                <div className={styles.selectBlock} >
                <EarthIcon/>
                    <select name='language' value={language} onChange={handleLanguage}>
                        <option value="en">{ language === 'en' ? 'English' : 'Англиский'}</option>
                        <option value="ru">{ language === 'ru' ? 'Русский' : 'Russian'}</option>
                    </select>
                </div>
                <a className={styles.Login} href="">{ language === 'ru' ? 'Войти' : 'Log in'}</a>  
                <Button>{ language === 'ru' ? 'Регистрация' : 'Sign in'}</Button>
            </div>
        </header>
        
        

        </>
    )
}
export default Header;