import SiderItem from "../siderItem/sider";
import SiderWrapper from "../sider_wrapper/siderWrapper";
import img1 from '../../../assets/img1.svg';
import img2 from '../../../assets/img2.svg';
import img3 from '../../../assets/img3.svg';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import img7 from '../../../assets/img7.svg';
import img8 from '../../../assets/img8.png';
import img9 from '../../../assets/img9.svg';
import { useTranslation } from "react-i18next";


export default function SiderFull() {

    const {t} = useTranslation()
    return (
        <SiderWrapper>
        <SiderItem 
        img={img1}
        title={t('slider.card1')}
        color='#B6CAFB'
        />
        
        <SiderItem classname='siderItem'
        img={img2}
        title={t('slider.card2')}
        color='#B4E2E1'
        />
        
        <SiderItem 
        img={img3}
        title={t('slider.card3')}
        color='#FF9E83'
        />
        
        <SiderItem 
        img={img4}
        title={t('slider.card4')}
        color='#F7E233'
        />
        
        <SiderItem 
        img={img5}
        title={t('slider.card5')}
        color='#F6DAC2'
        />
        
        <SiderItem 
        img={img6}
        title={t('slider.card6')}
        color='#B4E2E1'
        />
        
        <SiderItem 
        img={img7}
        title={t('slider.card7')}
        color='#B6CAFB'
        />
        
        <SiderItem 
        img={img8}
        title={t('slider.card8')}
        color='#F6DAC2'
        />
        
        <SiderItem 
        img={img9}
        title={t('slider.card9')}
        color='#FF9E83'
        />
        </SiderWrapper>
        )
    }