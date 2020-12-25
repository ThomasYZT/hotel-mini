<template>
  <view class="page-container">
    <view class="banner-wrapper">
      <view class="banner">
        <view class="banner-header">
          <view>亲爱的会员您好</view>
          <view>我的订单</view>
        </view>
        <view>贴心服务已准备好，等待您的入住</view>
      </view>
    </view>
    <view class="service-box info-box">
      <view class="info-box-header">客房服务</view>
      <view class="info-box-content">
        <view class="grid-box">
          <view class="grid-item">
            <image src="../../assets/img/icon/to-pay-icon.png" />
            离店退房
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/pending-icon.png" />
            叫醒服务
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            呼叫打扫
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            我要续住
          </view>
        </view>
      </view>
      <view class="info-box-header">我的智能锁</view>
      <view class="info-box-content">
        <view class="grid-box">
          <view class="grid-item">
            <image src="../../assets/img/icon/to-pay-icon.png" />
            密码修改
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/pending-icon.png" />
            远程开门
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            蓝牙开门
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            设置IC卡
          </view>
        </view>
      </view>
      <view class="info-box-header">酒店服务</view>
      <view class="info-box-content">
        <view class="grid-box">
          <view class="grid-item">
            <image src="../../assets/img/icon/to-pay-icon.png" />
            WIFI
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/pending-icon.png" />
            物品借用
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            点餐服务
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            送货上门
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'

export default {
  data () {
    return {
      msg: 'order'
    }
  }
}
</script>
