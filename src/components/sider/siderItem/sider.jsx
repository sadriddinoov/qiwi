import './sider.scss';

export default function SiderItem({img, title, color}) {
    return (
        <li className='sider_item'>
            <div style={{backgroundColor: `${color}`}} className="sider_wrapper">
            <img className='sider_img' src={img} alt="" width='52' height='52'/>
            </div>

            <h4 className="sider_heading">
                {title}
            </h4>
        </li>
    )
}