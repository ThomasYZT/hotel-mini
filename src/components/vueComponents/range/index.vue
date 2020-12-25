<template>
  <van-popup
    :show="visible"
    round
    position="bottom"
    custom-style="height: 20%"
    @close="close">
    <view class="pop-box">
      <view class="pop-content">
        <view class="range-view">¥{{rangeVal[0]}} ~ ¥{{rangeVal[1]}}</view>
        <AtRange
          v-if="visible"
          :min="0"
          :max="9000"
          :value="rangeVal"
          :onChange="onChange" />
      </view>
      <view class="pop-footer">
        <view class="query-btn" @tap="confirm">确定</view>
      </view>
    </view>
  </van-popup>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      rangeVal: [0, 9000]
    }
  },
  methods: {
    show(val) {
      this.rangeVal = val;
      this.visible = true
    },
    confirm() {
      this.$emit('on-change', this.rangeVal)
      this.close()
    },
    close() {
      this.visible = false;
    },
    onChange (val) {
      this.rangeVal = val;
    }
  }
}
</script>

<style lang="scss">
.pop-box {
  padding: 20px 20px;
  .pop-content {
    .range-view {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .pop-footer {
    .query-btn {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      width: 100%;
      color: #FFFFFF;
      border-radius: 50px;
      background-color: rgba(0,108,206, 1);
      &:active {
        background-color: rgba(0,108,206, .8);
      }
    }
  }
}
</style>
