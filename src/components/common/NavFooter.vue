<template>
  <div class="footer">
    <div class="footer_logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer_link">
      <a href>小米官方 </a> <span>|</span>
      <a href>小米之家 </a> <span>|</span>
      <a href>售后支持 </a> <span>|</span>
      <a href>关注我们 </a> <span>|</span>
      <a href>帮助中心 </a> 
    </div>
    <div class="copy_right">
      <p>mi.com 京ICP证110507号 京ICP备10046444号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter"
};
</script>

<style lang="scss" scoped>
@import "assets/basic/basc.scss";
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  font-size: 1.5em;
  text-align: center;
  .footer_logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    p {
    }
  }

  .footer_link {
    a {
        color: #999;
        display:inline-block;
    }
  }

  .copy_right {
      margin-top: 10px;
    p {
    }
  }
}
</style>