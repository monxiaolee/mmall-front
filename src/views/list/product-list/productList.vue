<template>
<ul class="p-list-con">
    <li class="p-item">
        <div class="p-img-con">
            <a class="link" href="" target="_blank">
                <img class="p-img" src="" alt="" />
            </a>
        </div>
        <div class="p-price-con">
            <span class="p-price">￥</span>
        </div>
        <div class="p-name-con">
            <a class="p-name" href="" target="_blank"></a>
        </div>
    </li>
</ul>
</template>
<script>
export default {
  data() {
      return {

      }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
/* 列表 */
.p-list-con{
    margin-top: 15px;
    margin-right: -20px;
    overflow: hidden;
}
.p-list-con .p-item{
    position: relative;
    width: 180px;
    float: left;
    padding: 10px;
    margin: 0 20px 20px 0;
    background: #fff;
}
.p-list-con .p-item .p-img-con{
    width: 180px;
    height: 200px;
}
.p-list-con .p-item .p-img-con .p-img{
    width: 100%;
    height: 100%;
}
.p-list-con .p-item .p-price-con{
    height: 30px;
    line-height: 30px;
}
.p-list-con .p-item .p-price-con .p-price{
    font-size: 16px;
    color: #e7380d;
}
.p-list-con .p-item .p-name-con{
    height: 40px;
    overflow: hidden;
}
.p-list-con .p-item .p-name-con .p-name{
    line-height: 20px;
    margin-bottom: 10px;
    color: #666;
    text-decoration: none;
}
</style>

