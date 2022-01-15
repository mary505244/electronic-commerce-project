import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import {Pagination, EffectCoverflow, Mousewheel} from 'swiper';

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css'
import 'swiper/modules/mousewheel/mousewheel.min.css'

import perfume from '../Home/imgs/perfume.svg'
import lipstick from '../Home/imgs/lipstick.svg'
import home0 from '../Home/imgs/home0.png'
import home1 from '../Home/imgs/home1.png'
import home2 from '../Home/imgs/home2.png'
import home3 from '../Home/imgs/home3.png'
import home4 from '../Home/imgs/home4.png'
import home5 from '../Home/imgs/home5.png'
import home6 from '../Home/imgs/home6.png'
import home7 from '../Home/imgs/home7.png'
import home8 from '../Home/imgs/home8.png'
import home9 from '../Home/imgs/home9.png'
import home10 from '../Home/imgs/home10.png'

import './index.less';



/**
 * 首页路由组件
 */
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2 className='swiperTitle'>年度大賞暢銷系列<img className='perfume' src={perfume} alt="perfume"/></h2>
                <Swiper style={{
                    width:'100%',
                    paddingBottom:'10px'
                }}
                
                    modules={[
                        Pagination,
                        EffectCoverflow,
                        Mousewheel
                        ]}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 600,
                        modifier: 1,
                        slideShadows: false,
                        }}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    mousewheel={{invert: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                {[home0, home1, home2,home3,home4,home5,home6,home7,home8,home9,home10
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/94908/1/_250x250_94908_20210603105232QWKftQecXq.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/94908/1/_250x250_94908_20211019055546BuPgIZNqMN.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/94908/1/_250x250_94908_20210603105230ysNKSsrRFV.png',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/94908/1/_250x250_94908_20211019055546FhSlLdYTAT.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/88103/2/_160x160_19156.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/88103/1/_160x160_88103_20200803065413FVEXoFtncA.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/88103/2/_160x160_22137.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/88103/2/_160x160_21576.jpg',
                    // 'https://dg9ugnb21lig7.cloudfront.net/uploads/product_image/88103/2/_160x160_21572.jpg'
                    
                ].map((i, el) => {
                    console.log(i, el)
                    return <SwiperSlide key={el}><img src={i} alt=""  style={{ display:'block', width:'100%'}}/></SwiperSlide>;
                })}
                </Swiper>


                <h2 className='tagTitle'><img className='lipstick' src={lipstick} alt="lipstick"/>熱搜美妝關鍵字Top</h2>

                    <ul class="tags">
                        {['溫和去角質','不含酒精','精華液','A醇','淡化斑點','改善皺紋',
                        '淡化黑眼圈','水洗式','緊實','眼下細紋','噴霧式','提亮',
                        '服貼','不浮粉','改善肌膚粗糙','淡疤','玻尿酸','橘色系',
                        '改善泛紅','不卡粉','凝膠凝凍狀','J-Beauty','法國','裸色系','新品',
                        '弱酸性','身體按摩油'
                        
                        ].map((i, el) => {
                            // console.log(i, el)
                            let tag = 'tag'+ Math.floor(Math.random()*3+1);
                            console.log(tag)
                            return <li key={el}><a href="#" className={tag}>{i}</a></li>;
                        })}
                    </ul>
            </div>
          );
    };   
}


