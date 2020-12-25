<template>
  <view class="mine">
    <view class="user-info-box">
      <view class="user-info">
        <view class="user-avater">
          <image src="../../assets/img/clips/bg1.jpg" />
        </view>
        <view class="user-detail">
          <view class="user-name">王爱民</view>
          <view class="user-account">
            <view class="account-item">余额：0.00</view>
            <view class="account-item">积分：0</view>
          </view>
        </view>
      </view>
    </view>
    <view class="info-box mine-order">
      <view class="info-box-header">
        我的订单
      </view>
      <view class="info-box-content">
        <view class="grid-box">
          <view class="grid-item">
            <image src="../../assets/img/icon/to-pay-icon.png" />
            待支付
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/pending-icon.png" />
            待使用
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            退款
          </view>
        </view>
      </view>
    </view>
    <view class="info-box service-order">
      <view class="info-box-header">
        服务订单
      </view>
      <view class="info-box-content">
        <view class="grid-box">
          <view class="grid-item">
            <image src="../../assets/img/icon/to-pay-icon.png" />
            酒店订单
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/pending-icon.png" />
            商城订单
          </view>
          <view class="grid-item">
            <image src="../../assets/img/icon/refund-icon.png" />
            餐饮订单
          </view>
        </view>
      </view>
    </view>
    <view class="info-box cell-list">
      <view class="info-box-content">
        <cell title="积分商城"></cell>
        <cell title="我的优惠券"></cell>
        <cell title="加盟合作"></cell>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'
import cell from '../../components/vueComponents/cell'
export default {
  components: {
    cell
  },
  data () {
    return {
      msg: 'mine'
    }
  }
}
</script>
