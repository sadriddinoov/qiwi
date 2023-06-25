import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SiderFull from '../../components/sider/siderFull/siderFull';
import './home.scss';
import Big1 from '../../assets/big1.png';
import Big2 from '../../assets/big2.png'
import Big3 from '../../assets/big3.png'
import Big4 from '../../assets/big4.png'


export default function Home() {
    
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
        {
            
            <div className='home'>
            <Header/>
            <SiderFull/>
            <div style={{marginBottom: '60px'}} className="api">
            <div className="api_container">
            
            <div className="api_wrapper">
                <h4 className="api_w-heading">
                Новые объявления
                </h4>

                <h4 className="api_w-heading">
                Лучщие предложение
                </h4>
            </div>

            <hr /> 
            <ul className="api_list">
            {
                products.slice(0, 16).map((item) => (

                    <Link key={item.id}
                     to={`/product/${item.id}`}
                     className="prduct_item">
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

                        
                    </Link>

                ))


            }
            </ul>

            <hr />

            <button className="api_showMore">
            Покозать еще ↓
            </button>
            </div>
            </div>

            <ul className="img_list">
                <li className="img_item">
                    <img src={Big1} alt="" className="img_img" width={359} height='238'/>
                </li>

                <li className="img_item">
                    <img src={Big2} alt="" className="img_img" width={359} height='238'/>
                </li>

                <li className="img_item">
                    <img src={Big3} alt="" className="img_img" width={359} height='238'/>
                </li>

                <li className="img_item">
                    <img src={Big4} alt="" className="img_img" width={120} height='238'/>
                </li>
            </ul>

            <div style={{marginTop: '25px'}} className="api">
            <div className="api_container">
            
            <div className="api_wrapper">
                <h4 className="api_w-heading">
                Новые объявления
                </h4>

                <h4 className="api_w-heading">
                Лучщие предложение
                </h4>

                <h4 className="api_w-heading">
                Новые объявления
                </h4>
            </div>

            <hr /> 
            <ul className="api_list">
            {
                products.slice(16, 20).map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`} className="api_item">
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
                    </Link>
                ))
            }
            </ul>

            <hr />

            <button className="api_showMore">
            Покозать еще ↓
            </button>
            </div>
            </div>

           
            <Footer/>
            </div>
            
        }
        </>
        )
    }