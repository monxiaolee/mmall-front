<template>
<div class="banner-con">
    <div class="banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in banners" :key="item.goods">
            <router-link :to="'/app/home/productDetail/'+item.id" target = _blank> <img :src="item.img" alt="" /></router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: true,
        },
        banners: []
      }
  },
  created() {
      this.getBanner()
  },
  methods: {
      getBanner() {
        //   获取banner数据
        this.axios.get('/api/getBanner').then(({data}) => {
            if(data.error === 0) {
                console.log(data)
                this.banners = data.data
            } else {
                console.log('后台返回banner数据失败。。。')
                this.banners = []
            }
        })
      }
  },
  components: {
      swiper,
      swiperSlide
  }
}
</script>
<style lang="scss" scoped>
/* banner-con */
.banner-con{
    width: 830px;
    float: left;
    height: 370px;
    background: #eee;
}
.banner-con .loading{
    margin-top: 150px;
}
.banner-con .banner-img{
    width: 100%;
    height: 370px;
}
/* banner的前一张和后一张按钮 */
.banner-con .banner-arrow{
    position: absolute; 
    top:160px;
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    background: #ccc;
    background: rgba(0,0,0,.2);
    cursor: pointer;
}
.banner-con .banner-arrow:hover{
    background: #aaa;
    background: rgba(0,0,0,.5);
}
.banner-con .banner-arrow.prev{
    left: 0;
}
.banner-con .banner-arrow.next{
    right: 0;
}
</style>

