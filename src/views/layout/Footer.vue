<template>
<div class="footer">
    <div class="w">
        <div class="links">
            <a class="link" href="" target="_blank">官方网站</a> |
            <a class="link" href="" target="_blank">淘宝的链接地址</a> |
            <a class="link" href="" target="_blank">京东的链接地址</a> |
            <a class="link" href="" target="_blank">联系客服</a>
        </div>
        <p class="copyright">
            Copyright © 2018 best1202.com All Right Reserved
        </p>
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
.footer{
    margin-top: 20px;
    padding-bottom: 10px;
}
.footer .links{
    text-align: center;
    color: #666;
    line-height: 30px;
}
.footer .links .link{
    padding: 0 10px;
}
.footer .copyright{
    text-align: center;
    color: #666;
    line-height: 30px;
}
</style>