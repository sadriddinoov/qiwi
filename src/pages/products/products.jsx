import Header from '../../components/header/header'
import './products.scss';
import Search from '../../assets/search.png';
import Pin from '../../assets/pin.svg';
import RangeSlider from '../../components/slider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

export default function Products() {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => { 
            setProducts(data)

        })
        .catch(error => console.log('error', error));
    },[])

    return (
        <>
        <Header/>
        
        <div className="products">
        <div className="container">
        <div className="products_container">
        <div className="products_input-w">
        <img src={Search} alt="" width={24} height='24'/>
        <p className="products_w-text">
        Введите название обявления или <span style={{color: '#2979FF', textDecoration: 'underline'}}> выберите из списка</span>
        </p>
        
        <input className='products_input' type="text" />
        </div>
        
        <div style={{display: 'flex', gap:'15px', alignItems: 'center', marginTop: '15px'}}>
        <h4 style={{background: '#E5E3FF', color: '#704FFF'}} className="products_heading">
        Интерсное
        </h4>
        
        <h4 style={{background: '#E4F6FF', color: '#57B4E2'}} className="products_heading">
        Топ
        </h4>
        
        <h4 style={{background: '#D2FFDB', color: '#47B95E'}} className="products_heading">
        Отличные предложение
        </h4>
        
        <h4 style={{background: '#F6DAC2', color: '#874C1A'}} className="products_heading">
        Супер цена
        </h4>
        
        <h4 style={{background: '#D8D8D8', color: '#787993'}} className="products_heading">
        г.Ташкент <img src={Pin} alt="" width={7} height='10'/>
        </h4>
        
        <h4 style={{background: '#D8D8D8', color: '#787993'}} className="products_heading">
        г.Термез <img src={Pin} alt="" width={7} height='10'/>
        </h4>
        
        <h4 style={{background: '#D8D8D8', color: '#787993'}} className="products_heading">
        г.Самарканд <img src={Pin} alt="" width={7} height='10'/>
        </h4>
        </div>
        
        <div style={{display: 'flex', gap: '55px', alignItems: 'center', marginTop: '25px'}}>
        <p style={{margin: '0'}} className="products_w-text">
        Вы сейчас в рубрике
        </p>
        
        <div className="products_btn-wrapper">
        <button className="products_btn">
        Электроника
        </button>
        
        <button style={{marginRight: ''}} className="products_btn">
        Мониторы
        </button>
        
        ↓
        </div>
        </div>
        
        <div style={{display: 'flex', marginTop: '25px'}}>
        
        <p style={{margin: '0', marginRight: '40px'}} className="products_w-text">
        Выберите цену от и до
        </p>
        <div>
        <RangeSlider/>

        <div style={{display: 'flex'}}>
        <p style={{margin: '0', marginLeft: '160px'}} className="products_w-text">
        100 000 сум
        </p>

        <p style={{margin: '0', marginLeft: '340px'}} className="products_w-text">
        2 000 000 сум
        </p>
        </div>
        </div>
        </div>
        
        <div style={{display: 'flex', gap: '40px', marginLeft: '50px', marginTop: '30px'}}>
            <select className='products_select'>
                <option selected hidden>Состояние</option>
                <option >Хорошее</option>
                <option >Плохое</option>
            </select>

            <select className='products_select'>
                <option selected hidden>Тип объявщика</option>
                <option >OLX</option>
                <option >Qiwi</option>
            </select>

            <select className='products_select'>
                <option selected hidden>Ташкент / Мирза улугбекский район</option>
                <option >Чиланзарский район</option>
                <option >Алмазарский район</option>
            </select>

        </div>

        <ul className="api_list">
            {
                products.slice(0, 16).map((item) => (

                    <Link key={item.id}
                     to={`/product/${item.id}`}
                     className="products_item">
                    <img className='api_img' src={item.image} alt="" width='262' height='190'/>

                    <span className='products_code'>TOP</span>

                        <h4 className="api_i-heading">
                            {item.title}
                        </h4>

                        <p className="api_i-text">
                        Вчера 22:55
                        </p>

                        <h4 className="api_i-price">
                            {`${item.price}$`}
                        </h4>

                        
                    </Link>

                ))


            }
            </ul>

            <hr />

            <button className="api_showMore">
            Покозать еще (20)↓
            </button>


            <div className="products_search">
                <div className="products_s-top">
                    <img src={Search} alt="" width={19} height='20'/>

                    <h4 className="products_st-heading">
                    СЕЙЧАС ИЩУТ
                    </h4>
                </div>

                <div className="products_s-botom">
                    <div className="products_botom-w">
                        <h4 className="products_sb-heading">
                        купить Мясная продукция
                        </h4>

                        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                        <img src={Search} alt="" width={10} height='10'/>

                        <p className="products_s-text">
                        2 часа назад
                        </p>
                        </div>
                    </div>

                    <div className="products_botom-w">
                        <h4 className="products_sb-heading">
                        купить Мясная продукция
                        </h4>

                        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                        <img src={Search} alt="" width={10} height='10'/>

                        <p className="products_s-text">
                        2 часа назад
                        </p>
                        </div>
                    </div>

                    <div className="products_botom-w">
                        <h4 className="products_sb-heading">
                        купить Мясная продукция
                        </h4>

                        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                        <img src={Search} alt="" width={10} height='10'/>

                        <p className="products_s-text">
                        2 часа назад
                        </p>
                        </div>
                    </div>

                    <div className="products_botom-w">
                        <h4 className="products_sb-heading">
                        купить Мясная продукция
                        </h4>

                        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                        <img src={Search} alt="" width={10} height='10'/>

                        <p className="products_s-text">
                        2 часа назад
                        </p>
                        </div>
                    </div>

                    <div className="products_botom-w">
                        <h4 className="products_sb-heading">
                        купить
                        </h4>

                        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                        <img src={Search} alt="" width={10} height='10'/>

                        <p className="products_s-text">
                        2 часа
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products_api">
                <h4 className="products_a-heading">
                САМОЕ ИНТЕРЕСНОЕ
                </h4>

                <div className="products_api-wrapper">
                {
                products.slice(17, 20).map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`} className="productss_item">
                        <img src={item.image} alt="" width={300} height='218'/>

                        <h4 className="api_i-heading">
                            {item.title}
                        </h4>

                        <p className="api_i-text">
                        Вчера 22:55
                        </p>

                        <h4 className="api_i-price">
                            {`${item.price}$`}
                        </h4>
                    </Link>
                ))
            }
                </div>
            </div>

            
        </div>
        </div>
        </div>

        <Footer/>
        </>
        )
    }