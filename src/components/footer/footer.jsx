import Feedback from '../feedback/feedback';
import './footer.scss';
let xix = '>'

export default function Footer() {
    return (
        <>
        <Feedback/>
        
        <footer className='footer'>
        <div className="container">
        <div className="footer_container">
        <ul className="footer_top">
        <li className='footer_item footer_item1'>
        <div className="footer_item_wr">
        <span style={{color: '#FF5469'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Автомобили</h4>
        </div>
        
        <p className="footer_item-text">
        Легковые авто <br />
        Мото <br />
        Автобусы <br />
        Грузовые авто <br /> 
        Сельхозтехника <br />
        Запчасти и Аксессуары <br />
        Прицепы и Спецтехника <br />
        Водный и Другой транспортa <br />
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: '#F8E71C'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Недвижимость</h4>

        </div>
        
        <p className="footer_item-text">
        Аренда квартир <br />
        Аренда домов <br />
        Аренда гаражей и Стоянок <br />
        Продажа квартир <br />
        Продажа домов <br /> 
        Продажа земли <br /> 
        Продажа гаражей/Стоянок <br />
        Аренда помещений <br />
        Продажа помещений <br />
        Прочая недвижимость <br />
        Обмен недвижимости <br />
        Коммерческая недвижимость
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: '#FF5469'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Электроника</h4>

        </div>
        
        <p className="footer_item-text">
        Телефоны <br />
        Компьютеры <br />
        Ноутбуки, планшеты <br />
        Оргтехника и расходники <br />
        ТВ,Фото,Видео и Аудио <br /> 
        Игры и Приставки <br />
        Техника для дома и Для себя <br />
        Климатическое оборудование <br />
        Аксессуары и Комплектующие <br />
        Техника для наблюдения <br />
        Прочая электроника
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: '#F5A623'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Личные вещи</h4>

        </div>
        
        <p className="footer_item-text">
        Одежда, обувь, аксессуары <br />
        Детская одежда и обувь <br />
        Детские товары и Игрушки <br />
        Школьникам <br /> 
        Часы и украшения <br />
        Товары для красоты и здоровья <br />
        Разные вещи
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: '#7ED321'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Дом и Сад</h4>

        </div>
        
        <p className="footer_item-text">
        Товары для интерьера <br />
        Товары для сада <br />
        Растения <br />
        Продукты питания <br />
        Посуда и Кухонная утварь <br />
        Хоз.инвентарь и Бытовая химия <br />
        Канцтовары и Расходные  <br />
        Прочие товары для дома
        </p>
        
        </li>
        
        <li className=''>
        <div className="footer_item_wr">
        <span style={{color: '#BD10E0'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Товары стройки и ремонта</h4>

        </div>
        
        <p className="footer_item-text">
        Двери и окна <br />
        Сантехника <br />
        Стройматериалы <br />
        Инструменты
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: '#50E3C2'}}>{xix}</span>
        
        <h4 className='footer_item-heading'>Хобби, Отдых и Спорт</h4>

        </div>
        
        <p className="footer_item-text">
        Антиквариат и Коллекции <br />
        Музыкальные инструменты <br />
        Велосипеды <br />
        Товары для спорта и отдыха <br />
        Книги/Журналы <br />
        CD/DVD/Пластинки/Кассеты <br />
        Билеты и путешествия <br />
        Охота и рыбалка
        </p>
        
        </li>
        
        <li className='footer_item'>
        <div className="footer_item_wr">
        <span style={{color: ' #4A90E2'}}>{xix}</span>
        
        <h4 className='footer_item-heading'> Бизнес и услуги</h4>

        </div>
        
        <p className="footer_item-text">
        Сырьё и материалы <br />
        Оборудование и аренда <br />
        Производство и обработка <br />
        Продажа бизнеса и партнерство <br />
        Финансовые услуги/Бухгалтерия <br />
        Услуги для красоты и здоровья <br />
        Услуги курьера и доставки <br /> 
        Реклама, Полиграфия и Маркетинг <br />
        Няни, Сиделки и Домработницы <br />
        Обучение, курсы и репетиторы <br />
        Фото, видео, искусство и дизайн <br />
        Перевод и Набор текста <br />
        Юридические услуги <br />
        Прокат товаров <br />
        Туризм и спорт <br />
        Праздники и мероприятия <br />
        Перевозки и Аренда авто <br />
        Услуги спецтехники <br /> 
        Автосервис <br />
        Услуги такси
        </p>
        
        </li>
        
        </ul>

        <p className="footer-c-text">
        Покозать еще ↓
        </p>
        
        <div className="footer_bottom">
        <hr className='footer_hr'/>
        
        <ul className='footer_b-list'>
            <li>
                <p className="footer-b_text">
                Подать объявление
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                Объявления
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                Магазины 
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                Помощь
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                Безопасностъ
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                Реклама на сайте
                </p>
            </li>

            <li>
                <p className="footer-b_text">
                О компании
                </p>
            </li>
        </ul>
        </div>
        </div>
        </div>
        </footer>
        </>
        )
    }