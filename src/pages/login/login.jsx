import './login.scss';
import Header from '../../components/header/header';
import LoginAdd from '../../components/loginAdd/loginAdd'
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Img from '../../assets/logini.png';
import Bgcimg from '../../assets/bgci.svg'

export default function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    
    const Navigate = useNavigate();
    
    const {setToken} = useContext(AuthContext)
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
            const data = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

        
        
       if (emailRef.current.value.length && passwordRef.current.value.length > 0 ) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "email": data.email,
            "password": data.password
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://reqres.in/api/login", requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                setToken(data.token);
                Navigate('/');
            } else {
                alert(data.error)
            }
        })
        .catch(error => prompt('error', error));
       }else {
        alert ('Fildlarni toldiring!')
       }
    }
    
    
    
    return (
        <div className='login'>
        <div className="container">
        
        <Header/>
        <LoginAdd/>
        <div className="login_container">
        
        <div className="login_left">
        
        <div className="login_title">
        Ваша регистрация завершена!
        </div>
        
        <p className="login_text">
        Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер
        </p>
        
        <form onSubmit={handleSubmit}>
        
        <div>
        <h4 className="login_heading">Введите email или номер телефона</h4>
        <input className='login_input' ref={emailRef} placeholder="email" type="text"/>
        </div>
        <div>
        <h4 className="login_heading">Пароль</h4>
        
        <input className='login_input' ref={passwordRef} placeholder="password" type="password"/>
        </div>
        <button className='logina_btn login_btn' style={{borderRadius: 0, display: 'block'}} type="submit">Войти</button>
        </form>
        
        <div style={{display: 'flex', alignItems: 'center', gap: "10px", fontSize: '10px', marginTop: '10px'}}>
        <p>email:</p>
        <h3>eve.holt@reqres.in</h3>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: "10px", fontSize: '10px'}}>
        <p>password:</p>
        <h3>citylisca</h3>
        </div>
        
        <div style={{display: 'flex', gap: '7px'}}>
        <hr className="xix-hr" />
        <p className="login__text">
        или
        </p>
        <hr className="xix-hr" />
        </div>
        
        <a href="#" className="login_link">Восстоновить ваше пароль</a>
        </div>
        
        <div className="login_right">
        <img className='login_img' src={Img} alt="" width={680} height='800'/>
        <img className='login_bgc' src={Bgcimg} alt="" width={270} height='270'/>
        </div>
        
        </div>
        </div>
        </div>
        )
    }