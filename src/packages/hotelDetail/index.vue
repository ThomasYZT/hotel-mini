<template>
  <view class="hotel-detail">
    <view class="img-block">
      <image src="../../assets/img/clips/bg1.jpg" />
      <view class="view-btn">
        <image src="../../assets/img/icon/img-icon.png" />
        52张
      </view>
    </view>
    <view class="info-block">
      <view class="info-item name">
        <view class="share-btn">
          <image src="../../assets/img/icon/share-icon.png" />
        </view>
        酒店名称
      </view>
      <view class="info-item comment">246条点评</view>
      <view class="info-item address">幽州大道金山建材市场对面</view>
    </view>
    <view class="room-block">
      <view class="date-block">
        <view class="date">12-04 <text>今日入住</text></view>
        <view class="count">1晚</view>
        <view class="date">12-05 <text>离店</text></view>
      </view>
      <view class="room-tag-box">
        <view class="room-tag">大床</view>
        <view class="room-tag">双床</view>
        <view class="room-tag">到店付</view>
        <view class="room-tag">免费取消</view>
        <view class="room-tag">含双早</view>
        <view class="room-tag">大床</view>
        <view class="room-tag">双床</view>
        <view class="room-tag">到店付</view>
        <view class="room-tag">免费取消</view>
        <view class="room-tag">含双早</view>
      </view>
      <view class="room-list">
        <roomCard v-for="item in roomList"></roomCard>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'
import roomCard from '../../components/serviceComponents/roomCard';
export default {
  components: {
    roomCard
  },
  data () {
    return {
      roomList: [{},{},{},{},{},{},{},{},{},{},{},{},{}]
    }
  }
}
</script>
