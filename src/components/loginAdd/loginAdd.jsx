import './loginAdd.scss';

export default function LoginAdd() {
    
    return (
        <div className="logina">
        <div className="container">
        <div className="logina_container">
        <div className="logina_left">
        <select className="logina_select">
        
        <option selected>Любая категория </option>
        <option>1</option>
        <option>2</option>
        
        </select>
        
        <hr className="logina_hr" />
        
        <h4 className="logina_heading">
        Что будем искать ?
        </h4>
        
        <hr className="logina_hr" />
        
        <select className="logina_select">
        
        <option selected>По всей Узбекистану</option>
        <option>да</option>
        <option>нет</option>
        
        </select>
        
        <button className="logina_btn">
        Найти
        </button>
        </div>

        <button className="logina_btn logina_btnn">
        Найти обнавления
        </button>
        
        
        </div>
        </div>
        </div>
        )
    }