<template>
<div class="nav">
    <div class="w">
        <div class="user-info">
            <span class="user not-login">
                <span class="link js-login">登录</span>
                <span class="link js-register">注册</span>
            </span>
            <span class="user login">
                <span class="link-text">
                    欢迎，
                    <span class="username"></span>
                </span>
                <span class="link js-logout">退出</span>
            </span>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <a class="link" href="./cart.html">
                    <i class="fa fa-shopping-cart"></i>
                    购物车(<span class="cart-count">0</span>)
                </a>
            </li>
            <li class="nav-item">
                <a class="link" href="./order-list.html">我的订单</a>
            </li>
            <li class="nav-item">
                <a class="link" href="./user-center.html">我的TEST</a>
            </li>
            <li class="nav-item">
                <a class="link" href="./about.html">关于TEST</a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
      return {

      }
  }
}
</script>
<style lang="scss" scoped>
.nav{
    background: #eee;
    height: 30px;
    line-height: 30px;   
}
/* 用户部分 */
.nav .user{
    float: left;
}
.nav .user.login{
    display: none;
}
.nav .user .link{
    margin-right: 5px;
}
/* 导航链接部分 */
.nav .nav-list{
    float: right;
}
.nav .nav-list .nav-item{
    display: inline-block;
    margin-left: 5px;
}
</style>