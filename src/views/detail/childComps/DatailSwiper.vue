<template>
        <swiper>
            <swiper-item class="swiper-item" v-for="item in topImages" :key="item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

    export default{
        name:'DatailSwiper',
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            topImages:{
                type:Array,
                defaule(){
                    return []
                }
            }
        }
        
}
</script>

<style scoped>
.swiper-item{
    height: 300px;
    overflow: hidden
}
</style>