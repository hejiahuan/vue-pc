<template>
  <div class="header">
    <div class="nav_topbar">
      <div class="container">
        <div class="topbar_menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar_user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">
            <span></span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav_header">
      <div class="container">
        <div class="head-logo">
          <a href="#"></a>
        </div>
        <div class="head-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="search">
          <div class="wrapper">
              <input type="text" name='keyword'>
              <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHearder"
};
</script>

<style lang="scss">
@import "assets/basic/basc.scss";
@import "assets/scss/mixin.scss";
.header {
  .nav_topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-content: center;
      .topbar_menu {
        display: flex;
        width: 20%;
        a {
          flex: 0.5;
          display: inline-block;
          color: #b0b0b0;
        }
      }

      .topbar_user {
        display: flex;
        a {
          margin-right: 17px;
          display: inline-block;
          color: #b0b0b0;
        }

        a:last-child {
          width: 110px;
          text-align: center;
          background-color: #f60;
          color: #fff;
        }

        span {
          @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }

  .nav_header {
    
    .container {
      height: 112px;
      //引入mixin函数方式
      @include flex();

      .head-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #f60;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55px,55px,"/imgs/mi-logo.png");
            display: inline-block;
            transition: margin 0.2s;
          }
          &::after {
            content: "";
            display: inline-block;
             @include bgImg(55px,55px,"/imgs/mi-home.png");
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .head-menu {
        flex: 0.3;
        display: flex;
        .item-menu {
          flex: 1;
          font-size: 16px;
          color: #333;
          font-weight: 600;
          span{
            cursor: pointer;
          }
        }
      }

      .search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
            // box-sizing: border-box;该如何计算定义元素的总宽度和高度
            // content-box | border-box  默认cotent-box
            // border-box (最真正的宽高)计算  实际宽高是width减去(border + padding)的值

          }
          a{
            display: inline-block;
              @include bgImg(18px,18px,"/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>