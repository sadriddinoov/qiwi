import './siderWraper.scss'
import left from '../../../assets/left.svg';
import right from '../../../assets/right.png'

export default function SiderWrapper({children}) {
    return (
        <div className="sider">
        <div className="container">
        <div className="sider_container">
        <img src={left} alt="" width='34' height='34'/>
        {children}
        <img src={right} alt="" width='34' height='34'/>
        </div>
        </div>
        </div>
        )
    }