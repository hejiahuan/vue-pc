<template>
  <div class="container">
    <ul>
      <li>
        <span class="first">
          <em class="iconfont">&#xe640;</em>预约维修服务
        </span>
      </li>
      <li>
        <span>
          <em class="iconfont">&#xe602;</em>7天无理由退货
        </span>
      </li>
      <li>
        <span>
          <em class="iconfont">&#xe60c;</em>15天免费换货
        </span>
      </li>
      <li>
        <span>
          <em class="iconfont">&#xe506;</em>满99元包邮
        </span>
      </li>
      <li>
        <span>
          <em class="iconfont">&#xe503;</em>520余家售后网点
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServiceBar"
};
</script>

<style lang="scss" scoped>
@import "assets/basic/basc.scss";
@import "assets/scss/mixin.scss";
.container {
  height: 80px;
  ul {
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0);
    @include flex($hov: center);
    border-bottom: 1px solid #e3e3e3;
    li {
      @include flex($hov: center);
      padding: 20px;
      width: 242px;
      flex: 1;
      color: #333;
      position: relative;
    }

    span {
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        left: 2px;
        height: 20px;
        border: 0.5px solid #e0e0e0;
      }

      &:hover {
        color: #ff6600;
        transition: color 0.5s;
      }
      transition: color 0.5s;
      em {
        margin-right: 4px;
        vertical-align: -0.15em;
      }
    }

    .first {
      &::before {
        border: none;
      }
    }
  }
}
</style>