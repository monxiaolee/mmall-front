<template>
<div class="nav">
    <div class="w">
        <div class="user-info">
            <span class="user not-login">
                <span class="link js-login">
                    <router-link :to="'/login'">登录</router-link>
                </span>
                <span class="link js-register">
                    <router-link :to="'/register'">注册</router-link>
                </span>
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
                <a class="link" href="">
                    <i class="fa fa-shopping-cart"></i>
                    购物车(<span class="cart-count">0</span>)
                </a>
            </li>
            <li class="nav-item">
                <a class="link" href="">我的订单</a>
            </li>
            <li class="nav-item">
                <a class="link" href="">我的TEST</a>
            </li>
            <li class="nav-item">
                <!-- 请求后台测试 -->
                <a class="link" @click="test">关于TEST</a>
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
  },
  methods: {
      test() {
          return this.$http.get(this.$api.test).then(res => {
              if(res.code == 200) {
                  console.log('返回成功')
              }
          })
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