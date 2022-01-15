import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import {Pagination, EffectCoverflow, Mousewheel} from 'swiper';

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css'
import 'swiper/modules/mousewheel/mousewheel.min.css'

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


                <h2>Example 2</h2>
                    <ul class="tags">
                    <li><a href="#" class="tag">HTML</a></li>
                    <li><a href="#" class="tag">CSS</a></li>
                    <li><a href="#" class="tag">JavaScript</a></li>
                    </ul>

            </div>
          );
    };   
}


