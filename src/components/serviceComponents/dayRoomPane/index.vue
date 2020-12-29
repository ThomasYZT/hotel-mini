<template>
  <view class="day-room-pane">
    <cell
      title="目的地"
      value=""
      placeholder="内容"
    />
    <cell
      title="时间"
      placeholder="时间"
      :value="filterParams.dayRange && filterParams.dayRange.length > 0 ? filterParams.dayRange : ''"
      @on-click="onCalendarCellClick"
    >
      <view
        v-if="filterParams.dayRange && filterParams.dayRange.length > 0"
        slot="cell-value"
        class="custom-calendar-value"
      >
        <view>{{ $date(filterParams.dayRange[0]).format('YYYY-MM-DD') }} <text>入住</text></view>
        <view>{{ $date(filterParams.dayRange[1]).format('YYYY-MM-DD') }} <text>离店 共{{ dayDuration }}晚</text></view>
      </view>
    </cell>
    <cell
      title="搜索"
      value=""
      placeholder="关键字/酒店/地址"
    />
    <cell
      title="价格"
      placeholder="价格"
      :value="filterParams.priceRange && filterParams.priceRange.length > 0 ? filterParams.priceRange : ''"
      @on-click="onPriceCellClick"
    >
      <view
        v-if="filterParams.priceRange"
        slot="cell-value"
        class="custom-price-value"
      >
        {{ `${filterParams.priceRange[0]} ~ ${filterParams.priceRange[1]}` }}
      </view>
    </cell>
    <view
      class="query-btn"
      @tap="search"
    >
      查询
    </view>
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
      dayDuration: 0
    }
  },
  watch: {
    'filterParams.dayRange': {
      handler(newVal) {
        this.dayDuration = this.$date.duration(this.$date(newVal[1]).diff(this.$date(newVal[0]))).days()
      },
      immediate: true,
      deep: true
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
