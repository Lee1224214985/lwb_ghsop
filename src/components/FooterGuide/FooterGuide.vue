<template>
<div>
    <p>footer</p>
  <div class="footer-guide">
     
    <span class="guide-item "  :class="{on: $route.path==='/msite' }" @click="goto('./msite')">
      <span>
        <i class="iconfont iconwaimai-1"></i>
      </span>
      <span>首页</span>
    </span>
     <span class="guide-item" :class="{on: $route.path==='/search' }" @click="goto('./search')">
      <span>
        <i class="iconfont iconsearch"></i>
      </span>
      <span>搜索</span>
    </span>
     <span class="guide-item" :class="{on: $route.path==='/order' }" @click="goto('./order')">
      <span>
        <i class="iconfont icondingdan"></i>
      </span>
      <span>订单</span>
    </span>
     <span class="guide-item" :class="{on: $route.path==='/profile' }" @click="goto('./profile')">
      <span>
        <i class="iconfont icontubiaozhizuomoban"></i>
      </span>
      <span>个人中心</span>
    </span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
   name:'FooterGuide',
   methods:{
     goto(path){  // 使用编程式路由
        this.$router.replace(path)
     }
   }
}
</script>

<style scoped lang="stylus" rel= "stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer-guide
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 50px
    width 100% 
    .guide-item
      display flex
      flex-direction  column
      text-align center  
      width 25%
      &.on
        color $green
      span 
        margin-top 3px 
        font-size 12px
        i 
          font-size 22px




</style>