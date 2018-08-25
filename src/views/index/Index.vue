<template>
  <div class="">
    <Nav></Nav>
    <Header></Header>
    <div class="w">
        <ul class="keywords-list">

            <!-- keywords-item 是一行 -->
            <li class="keywords-item" v-for="(item, index) in allMenuLabel" :key="index">
                <router-link :to="'/list/' + item.id">
                    <a class="link" target="_blank">{{item.name}}</a>
                </router-link>
            </li>

        </ul>
        <banner></banner>
    </div>


    <div class="w">
        
        <seriesList></seriesList>

    </div>

    <Footer></Footer>


  </div>
</template>
<script>
// import Header from '@/views/layout/Header'
import Nav from '@/views/layout/Nav'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import Banner from '@/views/index/banner'
import seriesList from '@/views/index/seriesList'

export default {
  name: 'Index',
  components: {
    Nav,
    Header,
    Footer,
    Banner,
    seriesList
  },
  data() {
      return {
        userInfo: {},
        allMenuLabel: []
      }
  },
  created() {
      this.getUserInfo()
      this.getAllMenu()
  },
  methods: {
        getUserInfo() {
            this.axios.get('/user/userinfo').then(({data}) => {
                if(data.error === 0) {
                    this.userInfo = data.data
                } else {
                    this.userInfo = {}
                }
            })
        },
        getAllMenu() {
            this.axios.get('/api/getAllMenu').then(({data}) => {
                if(data.error === 0) {
                    this.allMenuLabel = data.data
                    console.log(this.allMenuLabel)
                } else {
                    console.log('后台返回菜单为空。。。')
                    this.allMenuLabel = []
                }
            })
        }
  }
  
}
</script>
<style lang="scss" scoped>
/* keywords-list */
.keywords-list{
    float: left;
    width: 240px;
    height: 350px;
    padding: 10px 0;
    margin-right: 10px;
    background: #666;
    color: #fff;
}
.keywords-list .keywords-item{
    padding-left: 10px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
}
.keywords-list .keywords-item:hover{
    background: #999;
}
.keywords-list .keywords-item .link{
    margin-right: 6px;
    color: #fff;
}
.keywords-list .keywords-item .link:hover{
    color: #c60023;
}
</style>


