<template>
<div class="header">
    <div class="w">
        <a class="logo" href="./index.html">TEST</a>
        <div class="search-con">
            <input class="search-input" id="search-input" placeholder="请输入商品名称"/>
            <button class="btn search-btn" id="search-btn">搜索</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  data() {
      return {

      }
  }
}
</script>
<style lang="scss" scoped>
/* 通用头部导航 */
.header .logo{
    position: absolute;
    left: 60px;
    top: 34px;
    display: block;
    font-size: 36px;
    color: #c60023;
    font-weight: bold;
    text-decoration: none;
}

.header .search-con{
    padding: 40px 0 30px 250px;
}
.header .search-con .search-input{
    width: 550px;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 15px;
    border: 2px solid #c60023;
    outline: none;
}
.header .search-con .search-btn{
    position: absolute;
    height: 44px;
    width: 80px;
}

/* 面包屑导航 */
.crumb{
    margin-bottom: 15px;
    height: 50px;
    line-height: 50px;
    background: #eee;
    color: #888;
    font-size: 14px;
    border-top: 2px solid #c60023;
}
</style>