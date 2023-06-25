import { Link, Outlet } from 'react-router-dom';
import Feedback from '../../components/feedback/feedback';
import Header from '../../components/header/header';
import LoginAdd from '../../components/loginAdd/loginAdd';
import './profile.scss';

export default function Profile() {
    
    return (
        <div className="profile">
        <div className="container">
        <div className="profile_container">
        <div className="profile_wrapper">
        <Header/>
        <LoginAdd/>
        
        <div className="profile_bottom">
        <h3 className="profile_person-name">
            Здраствуйте уважаемый Клиент
        </h3>
        
        <div className="profile_b-right">
        <p className="profile_balance-text">
        Ваш счет: 2 3000 сум
        </p>
        
        <button className="profile_b-btn">Пополнить</button>
        </div>
        
        </div>
        
        <hr />
        
        <ul className="profile_list">
        <li className="profile_item">
        <div>
        <Link className='profile_link' to={'/profile/update'}>
        Объявления
        </Link>
        </div>
        </li>
        
        <li className="profile_item">
        <Link className='profile_link' to={'/profile/message'}>
        Сообщения
        </Link>
        </li>
        
        <li className="profile_item">
        <Link className='profile_link' to={'/profile/payment'}>
        Платежи и счёт
        </Link>
        </li>
        
        <li className="profile_item">
        <Link className='profile_link' to={'/profile/settings'}>
        Настройки
        </Link>
        </li>
        
        <li className="profile_item">
        <Link className='profile_link' to={'/profile/business'}>
        Мой бизнес
        </Link>
        </li>
        
        </ul>
        </div>

        <div style={{background: 'rgba(0, 0, 0, 0.0470165)', padding: '20px 10px'}}>
        <Outlet/>
        </div>

        
        
        <div style={{marginTop: '70px'}}>
        <Feedback/>
        </div>
        
        </div>
        </div>
        </div>
        )
    }