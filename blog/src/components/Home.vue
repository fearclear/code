<template>
  <el-container>
    <el-header>
        <el-row class="header">
          <el-col :span="12">
            <el-row type="flex">
                <h1 class="logo">
                  <a href="" class="ft-no-decoration logo-url">
                    <img class="logo-img" src="../../static/logo.png" alt=""><span class="ft-sm-title ml-10 main-text">FEARCLEAR</span>
                  </a>
                </h1>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-menu
              mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">博文分类</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="3">个人主页</el-menu-item>
            </el-menu>
            <el-autocomplete
            class="ml-10 header-search"
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="搜索博客"
            @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
    </el-header>
    <el-row style="padding: 20px 20px 0">
      <el-col :span="8">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="16">
        <div id="box">
          <ul class="con1">
            <li v-for="item in items" class="anim" :key="item.id" >{{item}}</li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-container>
      <el-main>
        主体
      </el-main>
      <el-aside class="aside">
        <el-card class="box-card">
          <el-menu
            default-active="2"
            class="el-menu-vertical">
              <el-menu-item-group>
                <template slot="title">
                  <el-badge is-dot class="item">Vue</el-badge>
                </template>
                <el-menu-item index="1-1">
                  <el-badge :value=12 class="item">选项1</el-badge>
                </el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">React</template>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
          </el-menu>
        </el-card>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      state: '',
      animate: false,
      items: [
          {name: '马云', id: 0},
          {name: '雷军', id: 1},
          {name: '王勤', id: 2}
      ]
    }
  },
  created() {
    // setInterval(this.scroll, 2000)
  },
  methods: {
    alert() {
      const h = this.$createElement
      this.$notify({
        title: '标题名称',
        message: h(
          'i',
          { style: 'color: teal' },
          '这是提示文案'
        )
      })
    },
    handleSelect() {},
    querySearchAsync() {},
    scroll() {
      this.animate = true    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0])  // 将数组的第一个元素添加到数组的
        this.items.shift()               // 删除数组的第一个元素
        this.animate = false  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu--horizontal{
    float: right;
  }
  .el-menu--horizontal{
    border-bottom: none;
  }
  .el-menu-vertical{
    border-right: none;
  }
  /* header */
  .header{
    border-bottom: solid 1px #e6e6e6;
    height: 61px;
    line-height: 61px;
  }
  .logo{
    height: 60px;
    line-height: 60px;
    margin: 0;
    vertical-align: middle;
  }
  .logo-url{
    letter-spacing: 2px;
  }
  .logo-img{
    width: 50px;
    height: 50px;
    margin: 5px 0;
    border-radius: 30px;
    vertical-align: top;
  }
  .header-search{
    float: right;
    width: 160px;
  }
  /* aside */
  .aside{
    padding: 20px;
    /* border-left: 1px solid #e6e6e6; */
  }
  .aside .el-menu-item{
    height: 36px;
    line-height: 36px;
  }
  /* news */
  #box{
    width: 300px;
    height: 32px;
    overflow: hidden;
    padding-left: 30px;
    border: 1px solid black;
  }
  .anim{
    transition: all 0.5s;
  }
  #con1 li{
    list-style: none;
    line-height: 30px;
    height: 30px;
  }
</style>
