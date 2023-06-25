import './feedback.scss';
import Logo from '../../assets/feedbackLogo.svg';
import PlayMarket from '../../assets/Android.png';
import AppS from '../../assets/AppStore.png'

export default function Feedback() {
    return (
        <div className="feedback">
        <div className="container">
        <div className="feedback_container">
        <div className="feedback_wrapper">
        <img src={Logo} alt="" width='67' height='67'/>
        
        <h2 className="feedback_heading">Продай, найди, купи все что ты пожелаешь </h2>
        </div>
        
        <p className="feedback_text">
        Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления
        </p>

        <div className="feedback_btn-wr">
            <img src={AppS} alt="" width='177' height='55'/>
            <img src={PlayMarket} alt="" width='177' height='55'/>
        </div>
        </div>
        </div>
        </div>
        )
    }