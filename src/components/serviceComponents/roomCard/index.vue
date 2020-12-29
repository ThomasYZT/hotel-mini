<template>
  <view
    class="hotel-card flex-box"
    @tap="onCardClick"
  >
    <view class="left-box">
      <view
        class="cover"
        :style="{ backgroundImage: 'url(../../../assets/img/clips/bg1.jpg)' }"
      />
    </view>
    <view class="center-box">
      <view class="info-item name">
        房间类型名称
      </view>
      <view class="info-item count">
        26平米 大床1.8米
      </view>
      <view class="info-item distance">
        距离直线1.4公里
      </view>
      <view class="info-item hotel-tag-box">
        <view class="hotel-tag">
          可用券
        </view>
        <view class="hotel-tag">
          返现
        </view>
      </view>
    </view>
    <view class="right-box">
      <view class="price">
        ¥<text class="num">197</text><text class="tip">起</text>
      </view>
<!--      <view class="pay-btn">在线付</view>-->
    </view>
  </view>
</template>

<script>
  import bg1 from '../../../assets/img/clips/bg1.jpg';
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        bg1
      }
    },
    methods: {
      onCardClick() {
        this.$emit('on-click', this.item)
      }
    }
  }
</script>

<style lang="scss">
.hotel-card {
  padding: 20px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  height: 300px;
  width: 100%;
  background-color: #FFFFFF;
  overflow: hidden;

  &:active {
    background-color: #ebedf0;
  }

  &.flex-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .left-box {
      flex: 0 1 auto;
      width: 150px;
      height: 100%;
      .cover {
        height: 100%;
        width: 100%;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .center-box {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 20px;

      .info-item {
        margin-bottom: 10px;
      }

      .name {
        font-size: 38px;
        font-weight: bold;
      }

      .count {
        font-size: 26px;
        color: #ACACAC;
      }

      .distance {
        font-size: 26px;
        color: #ACACAC;
      }

      .hotel-tag-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .hotel-tag {
          margin-right: 10px;
          padding: 5px 10px;
          font-size: 24px;
          color: #E6A69C;
          border: 1px solid #E6A69C;
          border-radius: 5px;
        }
      }

    }

    .right-box {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      .price {
        width: 100%;
        font-size: 24px;
        color: #FF374A;
        text-align: right;
        .num {
          font-size: 38px;
        }

        .tip {
          color: #ACACAC;
        }
      }

      .pay-btn {
        font-size: 24px;
        font-weight: bold;
        color: #FFFFFF;
        padding: 10px 20px;
        border-radius: 30px;
        background-color: #01CF93;
        box-shadow: 2px 5px 5px #01CF93;
      }
    }
  }
}
</style>
