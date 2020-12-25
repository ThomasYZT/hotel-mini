<template>
  <view class="hotel-card flex-box" @tap="onCardClick">
    <view class="left-box">
      <view class="cover" :style="{ backgroundImage: 'url(../../../assets/img/clips/bg1.jpg)' }"></view>
    </view>
    <view class="right-box">
      <view class="info-item name">酒店名称</view>
      <view class="info-item count">1000+人次消费</view>
      <view class="info-item distance">距离直线1.4公里</view>
      <view class="info-item hotel-tag-box">
        <view class="hotel-tag">可用券</view>
        <view class="hotel-tag">钟点房</view>
        <view class="hotel-tag">新客优惠</view>
        <view class="hotel-tag">立减</view>
      </view>
      <view class="info-item price">
        ¥<text class="num">197</text><text class="tip">起</text>
      </view>
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
      width: 250px;
      height: 100%;
      .cover {
        height: 100%;
        width: 100%;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .right-box {
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

    }
  }
}
</style>
