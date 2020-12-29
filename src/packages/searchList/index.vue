<template>
  <view class="search-list">
    <AtSearchBar
      placeholder="地点/品牌/酒店名称"
      show-action-button
      :value="filterParams.title"
      :on-change="onChange.bind(this, 'filterParams.title')"
      :on-action-click="onSearchClick"
    />
    <view class="filter-wrapper">
      <view class="order-box">
        <van-dropdown-menu>
          <view class="order-btn"
                @tap="onDiscountClick">优惠</view>
          <view class="order-btn"
                @tap="onRangeClick">价格筛选</view>
          <van-dropdown-item
            :value="value2"
            :options="option2"
          />
        </van-dropdown-menu>
      </view>
      <view class="tag-box">
        <view class="filter-tag">
          低价好评
        </view>
        <view class="filter-tag">
          近距离优先
        </view>
        <view class="filter-tag">
          低价好评
        </view>
        <view class="filter-tag">
          近距离优先
        </view>
        <view class="filter-tag">
          低价好评
        </view>
        <view class="filter-tag">
          近距离优先
        </view>
      </view>
    </view>
    <scroll-view
      class="list-wrapper"
      :scroll-y="true"
      :refresher-enabled="true"
      :scroll-with-animation="true"
      :enable-back-to-top="true"
      :upper-threshold="100"
      :lower-threshold="200"
      :refresher-triggered="isRefresh"
      @refresherrefresh="onPullDownRefresh"
      @scrolltolower="onPullUpLoading"
    >
      <hotelCard
        v-for="(item, index) in listData"
        :key="index"
        @on-click="onHotelClick"
      >
        {{ index }}
      </hotelCard>
    </scroll-view>

    <range ref="range"></range>
  </view>
</template>

<script>
import './index.scss'
import range from '../../components/vueComponents/range';
import hotelCard from '../../components/serviceComponents/hotelCard';
export default {
  components: {
    range,
    hotelCard
  },
  data () {
    return {
      listData: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      value1: 0,
      value2: 'a',
      option1: [],
      option2: [
        { text: '距离排序', value: 'a' },
        { text: '价格排序', value: 'b' }
      ],
      rangeVal: [],
      filterParams: {
        title: ''
      },
      isRefresh: false
    }
  },
  methods: {
    onChange() {

    },
    onRangeClick(val) {
      this.$refs.range.show([0, 9999])
    },
    onDiscountClick() {

    },
    onSearchClick () {

    },
    getList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    },
    onPullDownRefresh() {
      console.log('onPullDownRefresh')
      this.isRefresh = true;
      this.getList().then(() => {
        this.isRefresh = false;
      })
    },
    onPullUpLoading() {
      console.log('onPullUpLoading')
      this.getList().then(res => {

      })
    },
    onHotelClick(item) {
      this.$Taro.navigateTo({
        url: '/packages/hotelDetail/index'
      })
    }
  }
}
</script>
