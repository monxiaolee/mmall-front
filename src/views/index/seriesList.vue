<template>
<div>
    <div class="" v-for="(item, index) in list" :key="index">
        <div class="floor-wrap">
            <h1 class="floor-title">F{{index+1}} {{item.title}}</h1>
            <ul class="floor-list">
                <li class="floor-item" v-for="(list, index) in item.list" :key="index">
                    <a href="">
                        <span class="floor-text">{{list.title}}</span>
                        <img class="floor-img" :src="list.img" :alt="list.title" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>
<script>
import {queryCategorygoods} from '@/api/api'
export default {
    name: 'seriesList',
    components: {},
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            // 获取seriesList数据
            queryCategorygoods().then((response) => {
                console.log(response)
                this.list = response.data.data
            }).catch(function(error) {
                console.log('获取首页商品列表错误。。。')
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
/* floor */
.floor-wrap .floor-title{
    height: 50px;
    line-height: 50px;
    color: #d58717;
    font-weight: normal;
    font-size: 20px;
    border-bottom: 1px solid #d58717;
}
/* 更改各楼层标题颜色 */
.floor-wrap:nth-child(2) .floor-title{
    color: #3b838c;
    border-bottom: 1px solid #3b838c;
}
.floor-wrap:nth-child(3) .floor-title{
    color: #a93931;
    border-bottom: 1px solid #a93931;
}
.floor-wrap:nth-child(4) .floor-title{
    color: #488bad;
    border-bottom: 1px solid #488bad;
}
.floor-wrap:nth-child(5) .floor-title{
    color: #642663;
    border-bottom: 1px solid #642663;
}
.floor-wrap .floor-list{
    margin-right: -20px;
    overflow: hidden;
}
.floor-wrap .floor-list .floor-item{
    position: relative;
    width: 200px;
    height: 220px;
    margin: 15px 20px 15px 0;
    float: left;
    cursor: pointer;
    background: #fff;
}
.floor-wrap .floor-list .floor-item:hover{
    box-shadow: 1px 1px 7px #ddd;
}
.floor-wrap .floor-list .floor-item .floor-text{
    position: absolute;
    top: 12px;
    left: 20px;
    font-size: 16px;
    color: #555;
}
.floor-wrap .floor-list .floor-item .floor-img{
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 80%;
    height: 75%;
    border: none;
}
</style>


