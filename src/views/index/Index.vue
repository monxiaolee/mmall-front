<template>
  <div class="">
    <Nav></Nav>
    <Header></Header>
    <div class="w">
      <ul class="keywords-list">
          <li class="keywords-item">
              <a class="link" target="_blank" :href="'/list'">手机</a>
              <a class="link" target="_blank" href="./list.html?keyword=数码">数码</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=电脑">电脑</a>
              <a class="link" target="_blank" href="./list.html?keyword=办公配件">办公配件</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=电视">电视</a>
              <a class="link" target="_blank" href="./list.html?keyword=空调">空调</a>
              <a class="link" target="_blank" href="./list.html?keyword=冰箱">冰箱</a>
              <a class="link" target="_blank" href="./list.html?keyword=洗衣机">洗衣机</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=厨卫家电">厨卫家电</a>
              <a class="link" target="_blank" href="./list.html?keyword=小家电">小家电</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=家具">家具</a>
              <a class="link" target="_blank" href="./list.html?keyword=家具">家具</a>
              <a class="link" target="_blank" href="./list.html?keyword=家装">家装</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=厨卫家电">厨卫家电</a>
              <a class="link" target="_blank" href="./list.html?keyword=小家电">小家电</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=个护化妆">个护化妆</a>
              <a class="link" target="_blank" href="./list.html?keyword=清洁用品">清洁用品</a>
              <a class="link" target="_blank" href="./list.html?keyword=纸品">纸品</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=母婴用品">母婴用品</a>
              <a class="link" target="_blank" href="./list.html?keyword=儿童玩具">儿童玩具</a>
              <a class="link" target="_blank" href="./list.html?keyword=童装童鞋">童装童鞋</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=鞋靴">鞋靴</a>
              <a class="link" target="_blank" href="./list.html?keyword=箱包">箱包</a>
              <a class="link" target="_blank" href="./list.html?keyword=钟表">钟表</a>
              <a class="link" target="_blank" href="./list.html?keyword=珠宝">珠宝</a>
          </li>
          <li class="keywords-item">
              <a class="link" target="_blank" href="./list.html?keyword=图书">图书</a>
              <a class="link" target="_blank" href="./list.html?keyword=音像">音像</a>
              <a class="link" target="_blank" href="./list.html?keyword=电子书">电子书</a>
          </li>
      </ul>
      <div class="banner-con">
          <div class="loading"></div>
      </div>
    </div>


    <div class="w">
      <div class="floor-wrap">
          <h1 class="floor-title">F1 窗帘</h1>
          <ul class="floor-list">
              <li class="floor-item">
                  <a href="./list.html?categoryId=100006">
                      <span class="floor-text">双开门冰箱</span>
                      <img class="floor-img" src="" alt="双开门冰箱" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100007">
                      <span class="floor-text">电视</span>
                      <img class="floor-img" src="" alt="电视" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100008">
                      <span class="floor-text">洗衣机</span>
                      <img class="floor-img" src="" alt="洗衣机" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100009">
                      <span class="floor-text">空调</span>
                      <img class="floor-img" src="" alt="空调" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100010">
                      <span class="floor-text">热水器</span>
                      <img class="floor-img" src="" alt="热水器" />
                  </a>
              </li>
          </ul>
      </div>
      <div class="floor-wrap">
          <h1 class="floor-title">F2 桌布</h1>
          <ul class="floor-list">
              <li class="floor-item">
                  <a href="./list.html?categoryId=100011">
                      <span class="floor-text">笔记本电脑</span>
                      <img class="floor-img" src="" alt="笔记本电脑" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100012">
                      <span class="floor-text">手机</span>
                      <img class="floor-img" src="" alt="手机" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100013">
                      <span class="floor-text">平板电脑</span>
                      <img class="floor-img" src="" alt="平板电脑" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100014">
                      <span class="floor-text">数码相机</span>
                      <img class="floor-img" src="" alt="数码相机" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100015">
                      <span class="floor-text">3C配件</span>
                      <img class="floor-img" src="" alt="3C配件" />
                  </a>
              </li>
          </ul>
      </div>
      <div class="floor-wrap">
          <h1 class="floor-title">F3 沙发套</h1>
          <ul class="floor-list">
              <li class="floor-item">
                  <a href="./list.html?categoryId=100016">
                      <span class="floor-text">女装</span>
                      <img class="floor-img" src="" alt="女装" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100017">
                      <span class="floor-text">帽子专区</span>
                      <img class="floor-img" src="" alt="帽子专区" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100018">
                      <span class="floor-text">旅行箱</span>
                      <img class="floor-img" src="" alt="旅行箱" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100019">
                      <span class="floor-text">手提包</span>
                      <img class="floor-img" src="" alt="手提包" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100020">
                      <span class="floor-text">保暖内衣</span>
                      <img class="floor-img" src="" alt="保暖内衣" />
                  </a>
              </li>
          </ul>
      </div>
      <div class="floor-wrap">
          <h1 class="floor-title">F4 抱枕</h1>
          <ul class="floor-list">
              <li class="floor-item">
                  <a href="./list.html?categoryId=100021">
                      <span class="floor-text">最爱零食</span>
                      <img class="floor-img" src="" alt="最爱零食" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100022">
                      <span class="floor-text">生鲜</span>
                      <img class="floor-img" src="" alt="生鲜" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100023">
                      <span class="floor-text">半成品菜</span>
                      <img class="floor-img" src="" alt="半成品菜" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100024">
                      <span class="floor-text">速冻专区</span>
                      <img class="floor-img" src="" alt="速冻专区" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100025">
                      <span class="floor-text">进口牛奶</span>
                      <img class="floor-img" src="" alt="进口牛奶" />
                  </a>
              </li>
          </ul>
      </div>
      <div class="floor-wrap">
          <h1 class="floor-title">F5 绿植</h1>
          <ul class="floor-list">
              <li class="floor-item">
                  <a href="./list.html?categoryId=100026">
                      <span class="floor-text">白酒</span>
                      <img class="floor-img" src="" alt="白酒" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100027">
                      <span class="floor-text">红酒</span>
                      <img class="floor-img" src="" alt="红酒" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100028">
                      <span class="floor-text">饮料</span>
                      <img class="floor-img" src="" alt="饮料" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100029">
                      <span class="floor-text">调制鸡尾酒</span>
                      <img class="floor-img" src="" alt="调制鸡尾酒" />
                  </a>
              </li>
              <li class="floor-item">
                  <a href="./list.html?categoryId=100030">
                      <span class="floor-text">进口洋酒</span>
                      <img class="floor-img" src="" alt="进口洋酒" />
                  </a>
              </li>
          </ul>
      </div>
    </div>

    <Footer></Footer>


  </div>
</template>
<script>
// import Header from '@/views/layout/Header'
import Nav from '@/views/layout/Nav'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'

export default {
  name: 'Index',
  components: {
    Nav,
    Header,
    Footer
  },
  data() {
      return {

      }
  },
  mounted() {
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


