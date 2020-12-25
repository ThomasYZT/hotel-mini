<template>
  <view class="hour-room-pane">
    <cell title="目的地" value="" placeholder="内容">

    </cell>
    <cell title="时间"
          placeholder="时间"
          :value="filterParams.dayRange || ''"
          @on-click="onCalendarCellClick">
      <view v-if="filterParams.dayRange" class="custom-calendar-value" slot="cell-value">
        <view>{{$date(filterParams.dayRange).format('YYYY-MM-DD')}} <text>入住</text></view>
      </view>
    </cell>
    <cell title="搜索" value="" placeholder="关键字/酒店/地址"></cell>
    <cell title="价格"
          placeholder="价格"
          :value="filterParams.priceRange && filterParams.priceRange.length > 0 ? filterParams.priceRange : ''"
          @on-click="onPriceCellClick">
      <view v-if="filterParams.priceRange" class="custom-price-value" slot="cell-value">
        {{`${filterParams.priceRange[0]} ~ ${filterParams.priceRange[1]}`}}
      </view>
    </cell>
    <view class="query-btn" @tap="search">查询</view>
  </view>
</template>

<script>
  import './index.scss'
  import cell from '../../vueComponents/cell';
  export default {
    components: {
      cell
    },
    props: {
      filterParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data () {
      return {

      }
    },
    methods: {
      onCalendarCellClick() {
        this.$pubSub.publish(this.$pubSub.topic.SHOW_CALENDAR)
      },
      onPriceCellClick() {
        this.$pubSub.publish(this.$pubSub.topic.SHOW_RANGE)
      },
      search() {
        this.$Taro.navigateTo({
          url: '/packages/searchList/index'
        })
      }
    }
  }
</script>
