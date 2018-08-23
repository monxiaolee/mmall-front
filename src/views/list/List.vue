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
        <ul class="sort-con">
            <li class="sort-item active" data-type="default">默认排序</li>
            <li class="sort-item" data-type="price">
                <span>价格</span>
                <i class="fa fa-sort-asc"></i>
                <i class="fa fa-sort-desc"></i>
            </li>
        </ul>
        <!-- list 容器 -->        
        <product-list></product-list>

        <!-- 分页容器 -->
        <div class="pagination"></div>
    </div>

    <Footer></Footer>
</div>
</template>
<script>
import Nav from '@/views/layout/Nav'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'

import productList from './product-list/productList'

export default {
    name: 'List',
    data() {
        return {

        }
    },
    created() {
        this.getAllData()
    },
    methods: {
        getAllData() {
            console.log(this.$route.params)
        }
    },
    components: {
        Nav, 
        Header,
        Footer,
        productList
    }
}
</script>
<style lang="scss" scoped>
.sort-con{
    overflow: auto;
}
.sort-con .sort-item {
    float: left;
    display: inline-block;
    position: relative;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #ccc;
    margin-right: -1px;
    background: #fff;
    color: #333;
    cursor: pointer;
}
.sort-con .sort-item.active{
    background: #c60023;
    border: 1px solid #c60023;
    color: #fff;
}
.sort-con .sort-item .fa-sort-desc{
    position: absolute;
    top: 8px;
    right: 8px;
}
.sort-con .sort-item.asc .fa-sort-desc{
    opacity: .6;
}
.sort-con .sort-item.desc .fa-sort-asc{
    opacity: .6;
}

/* 错误信息 */
.err-tip {
    height: 60px;
    line-height: 60px;
    color: #f60;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background: #eee;
}
</style>

