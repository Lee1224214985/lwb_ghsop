<template>
  <div>
    <!-- 在app中注册组件 -->
    <router-view></router-view>
    <Footer-Guide></Footer-Guide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue";

export default {
  components: {
    FooterGuide
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
