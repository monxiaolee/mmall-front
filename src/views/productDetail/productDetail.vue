<template>
<div class="">
    <Nav></Nav>
    <Header></Header>

    <div class="crumb">
        <div class="w">
            <div class="crumb-con">
                <a class="link" href="">TEST</a>
                <span>></span>
                <span class="link-text"></span>
            </div>
        </div>
    </div>

    <div class="page-wrap w">


        <div class="intro-wrap">
            <div class="p-img-con">
                <!-- 主图 -->
                <div class="main-img-con">
                    <img class="main-img" src=""/>
                </div>
                <!-- 子图 -->
                <ul class="p-img-list">
                    <li class="p-img-item">
                        <img class="p-img" src="" />
                    </li>
                </ul>
            </div>
            <div class="p-info-con">
                <h1 class="p-name">商品名称</h1>
                <p class="p-subtitle">子标题</p>
                <div class="p-info-item p-price-con">
                    <span class="label">价格:</span>
                    <span class="info">￥</span>
                </div>
                <div class="p-info-item">
                    <span class="label">库存:</span>
                    <span class="info"></span>
                </div>
                <div class="p-info-item p-count-con">
                    <span class="label">数量:</span>
                    <input class="p-count" value="1" readonly=""/>
                    <span class="p-count-btn plus">+</span>
                    <span class="p-count-btn minus">-</span>
                </div>
                <div class="p-info-item">
                    <a class="btn cart-add">加入购物车</a>
                </div>
            </div>
        </div>
        <div class="detail-wrap">
            <div class="detail-tab-con">
                <ul class="tab-list">
                    <li class="tab-item active">详细描述</li>
                </ul>
            </div>
            <div class="detail-con">
                商品详情。。。
            </div>
        </div>


    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Nav from '@/views/layout/Nav'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'

export default {
    name: 'productDetail',
    components: {
        Nav,
        Header,
        Footer
    },
    data() {

    },
    created() {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
/* 图片区 */
.intro-wrap{
    overflow: hidden;
}
.intro-wrap .p-img-con{
    float: left;
    width: 420px;
}
/* 主图 */
.intro-wrap .p-img-con .main-img-con{
    height: 400px;
    border: 1px solid #ddd;
}
.intro-wrap .p-img-con .main-img-con .main-img{
    height: 100%;
    width: 100%;
}
/* 缩略图 */
.intro-wrap .p-img-con .p-img-list{
    overflow: hidden;
    height: 76px;
    margin-top: 5px;
    margin-right: -10px;
}
.intro-wrap .p-img-con .p-img-item{
    float: left;
    margin-right: 10px;
    width: 72px;
    height: 72px;
    border: 2px solid #eee;
    cursor: pointer;
}
.intro-wrap .p-img-con .p-img-item:hover{
    border: 2px solid #c60023;
}
.intro-wrap .p-img-con .p-img-item .p-img{
    width: 100%;
    height: 100%;
}
/* 商品信息 */
.intro-wrap .p-info-con{
    float: left;
    width: 640px;
    margin-left: 20px;
}
.intro-wrap .p-info-con .p-name{
    font-size: 20px;
    color: #333;
}
.intro-wrap .p-info-con .p-subtitle{
    font-size: 15px;
    color: #c60023;
    line-height: 30px;
}
.intro-wrap .p-info-con .p-info-item{
    position: relative;
    padding: 0 10px;
    margin-top: 20px;
}
.intro-wrap .p-info-con .p-info-item .label{
    display: inline-block;
    width: 50px;
    color: #999;
}
/* 价格部分 */
.intro-wrap .p-info-con .p-price-con{
    background: #eee;
    padding: 10px;
}
.intro-wrap .p-info-con .p-price-con .info{
    color: #c60023;
    font-size: 18px;
}
/* 数量部分 */
.intro-wrap .p-info-con .p-count-con .p-count{
    height: 36px;
    line-height: 36px;
    font-size: 15px;
    width: 45px;
    text-align: center;
    outline: none;
    border: 1px solid #aaa;
}
.intro-wrap .p-info-con .p-count-con .p-count-btn{
    position: absolute;
    left: 115px;
    display: block;
    width: 20px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    font-size: 10px;
    border: 1px solid #aaa;
    background: #fff;
    cursor: pointer;
    -moz-user-select : none;
    -webkit-user-select : none;
    -ms-user-select : none;
    user-select : none;
}
.intro-wrap .p-info-con .p-count-con .p-count-btn.plus{
    top: 0;
}
.intro-wrap .p-info-con .p-count-con .p-count-btn.minus{
    bottom: 0;
}
/* 商品详细信息 */
.detail-wrap{
    margin-top: 15px;
}
.detail-wrap .tab-list{
    background: #eee;
    border: 1px solid #ddd;
    overflow: hidden;
    border-bottom: 1px solid #c60023;
}
.detail-wrap .tab-list .tab-item{
    float: left;
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
}
.detail-wrap .tab-list .tab-item.active{
    background: #c60023;
    color: #fff;
}
.detail-wrap .detail-con{
    padding-top: 20px;
    background: #fff;
}
.detail-wrap .detail-con img{
    display: block;
    margin: 0 auto;
}
/* 错误信息 */
.err-tip{
    height: 60px;
    line-height: 60px;
    color: #f60;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background: #eee;
}
</style>

