import './header.scss';
import Logo from '../../assets/siteLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Avatar from '../../assets/avatar.png';
import { useTranslation } from 'react-i18next';

export default function Header() {

    const {t, i18n} = useTranslation();



    const navigate = useNavigate();

    const handleClic = () => {
        navigate('/profile')
    }

    const handleClcikLang = (e) => {
        i18n.changeLanguage(e.target.value);

        localStorage.setItem('lang', JSON.stringify(e.target.value))
    }

    const handleCheced = JSON.parse(localStorage.getItem('lang'))
    
    let {token} = useContext(AuthContext)
    return (
        <header className='header'>
        <div className="container">
        <div className="header_container">
        
        <div className="header_wrapper">
        <img src={Logo} alt="" width='67' height='67' />
        
        <h1 className='header_heading'>{t('header.title')}</h1>
        </div>
        
        <ul className="header_list">
        <li className="header_item">
        <Link className='header_link' to='/products'>{t('header.links.link1')}</Link>
        </li>
    
        
    
        </ul>
        
        
        
        
        <form onChange={handleClcikLang}  className="header_lang">
        <input name='lang' className='header_input' type="radio" value={'ru'} id='ru' />
        <label htmlFor='ru' className={`header_label ${handleCheced === 'ru' && 'checked'}`}>Рус</label>

        <span>|</span>

        <input name='lang' className='header_input' type="radio" value={'uz'} id='uz' />
        <label htmlFor='uz' className={`header_label ${handleCheced === 'uz' && 'checked'}`}>Oz</label>
        </form>
        
        {
            token ? (
                <div onClick={handleClic} style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                <p className="header_name">
                {t('header.name')}
                </p>
                
                <img src={Avatar} alt="" width={41} height={41}/>
                </div>
                )
                : (
                    <div className="header_links-wrapper">
                    <Link to='/login' className='header_vxod'>{t('header.login.vxod')}</Link>
                    <span>|</span>
                    <Link to='/login' className='header_vxod'>{t('header.login.registr')}</Link>
                 </div>
         
                )
            }
            
            </div>
            </div>
            </header>
            )
        }