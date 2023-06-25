import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoginAdd from '../../components/loginAdd/loginAdd';
import './product.scss';

export default function Product() {
    
    const productId = useParams();
    
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        
        fetch(`https://fakestoreapi.com/products/${productId.id}`)
        .then(res => res.json())
        .then(data =>  {
            setProducts([data])
            console.log(data);
        })
        .catch(error => console.log('error', error));
    },[])
    
    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => { 
            setProduct(data)
            
        })
        .catch(error => console.log('error', error));
    },[])
    return (
        <>
        <Header/>
        <LoginAdd/>
        <div className="product">
        <div className="container">
        <div className="product_container">
        <p className="product_text">
        Объявления   /   Ташкент Недвижимость   /   Ташкент Квартиры   /   Ташкент Продажа   /   Новостройки Ташкент
        </p>
        
        {
            products.map((item) => (
                <>
                <h4 className="product_heading">
                {item.title}
                </h4>
                
                <div className="product_wrapper">
                <img style={{marginBottom: '333px'}} src={item.image} alt="" width={'500'} height='500'/>
                
                <div className="product_right">
                <div style={{display: 'flex', alignItems: 'center', gap: '222px'}} className="product-text_w">
                <p className="product-r_text">
                Артикул: 4418970
                </p>
                
                <p className="product-r_text">
                обновлено: 28.04.17 добавлено: 28.04.17
                </p>
                </div>
                
                <h4 className="product_price">
                {`${item.price}$`}
                </h4>
                
                <a href="" className="product_link">Ташкент, Ташкентская область, Юнусабадский район </a>
                
                <button className="product_btn">
                99891 166 ****
                </button>
                
                <button className="product_btn">
                99891 166 ****
                </button>
                
                <div style={{display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '25px'}}>
                <p className="product-update_text">
                Автор обьявлении:
                </p>
                
                <a href="" style={{color: '#2AAE63'}} className="product_link">Зухриддин Темиров</a>
                </div>
                
                <button className="product_r-btn">
                Написать автору
                </button>
                
                <button className="product_r-btn">
                Предложить свою цену
                </button>
                
                
                <div className="product_table">
                <div className="product_table_main">
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Количество комнат:</p>
                <p className="product_t-text">6</p>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Общая площадь:</p>
                <p className="product_t-text">40 м2</p>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Этаж:</p>
                <p className="product_t-text">32</p>
                </div>
                </div>
                
                <div className="product_table_main">
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Этажность дома:</p>
                <p className="product_t-text">6</p>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Состояние квартиры:</p>
                <p className="product_t-text">Первая сдача </p>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Этаж:</p>
                <p className="product_t-text">32</p>
                </div>
                </div>
                
                <div className="product_table_main">
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Планировка</p>
                <a href="" className="product_t-link">Раздельная</a>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Год постройки/сдачи</p>
                <a href="" className="product_t-link">Сдача в 2017</a>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Ремонт</p>
                <p className="product_t-text">Авторский проект</p>
                </div>
                </div>
                
                
                <div className="product_table_main">
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Санузел</p>
                <a href="" className="product_t-link">2 санузла и более</a>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Меблирована</p>
                <a href="" className="product_t-link">Да</a>
                </div>
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Высота потолков</p>
                <p className="product_t-text">32</p>
                </div>
                </div>
                
                
                <div className="product_t-dep">
                <p style={{marginBottom: '7px'}} className="product_t-text">Рядом есть</p>
                <a href="" className="product_t-link">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</a>
                </div>
                
                <div className="product_t-dep">
                <p style={{width: '550px'}} className="product_t-text">{item.description}</p>
                
                <div style={{display: 'flex', marginTop: '30px', gap: '160px'}}>
                <p style={{color: '#000000'}} className="product_t-text">Просмотры:10958</p>
                <p style={{color: '#D0021B'}} className="product_t-text">Пожаловатся</p>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                
                </>
                ))
            }
            
            <div style={{marginTop: '25px'}} className="api">
            <div className="api_container">
            
            <div className="api_wrapper">
            <h4 className="api_w-heading">
            Похожие объявления
            </h4>
            
            <h4 className="api_w-heading">
            Обьявление автора
            </h4>
            
            </div>
            
            <hr /> 
            <ul className="api_list">
            {
                product.slice(16, 20).map((item) => (
                    <div key={item.id} className="api_item">
                    
                    <img className='api_img' src={item.image} alt="" width={262} height='190'/>
                    
                    <h4 className="api_i-heading">
                    {item.title}
                    </h4>
                    
                    <p className="api_i-text">
                    Вчера 22:55
                    </p>
                    
                    <h4 className="api_i-price">
                    {`${item.price}$`}
                    </h4>
                    </div>
                    ))
                }
                </ul>
                
                <hr />
                
                <button className="api_showMore">
                Покозать еще ↓
                </button>
                </div>
                </div>
                </div>
                </div>
                </div>
                
                <Footer/>
                </>
                )
            }