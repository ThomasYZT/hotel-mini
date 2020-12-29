<template>
  <view class="page-container">
    <view class="bg-wrapper">
      <image src="../../assets/img/clips/bg1.jpg" />
    </view>
    <view class="tabs">
      <view class="tab-nav">
        <view
          v-for="item in tabList"
          :key="item.index"
          :class="{ 'active' : tabIndex === item.index }"
          class="tab-nav-item"
          @tap="onTabClick(item)"
        >
          {{ item.label }}
        </view>
      </view>
      <view class="tab-content">
        <view
          v-show="tabIndex === 0"
          class="tab-pane"
        >
          <dayRoomPane :filter-params="dayRoomParams" />
        </view>
        <view
          v-show="tabIndex === 1"
          class="tab-pane"
        >
          <hourRoomPane :filter-params="hourRoomParams" />
        </view>
      </view>
    </view>

    <calendar
      ref="calendar"
      @on-change="calendarChange"
    />
    <calendar
      ref="singleCalendar"
      type="single"
      @on-change="singleCalendarChange"
    />
    <range
      ref="range"
      @on-change="rangeChange"
    />
  </view>
</template>

<script>
import './index.scss'
import dayRoomPane from '../../components/serviceComponents/dayRoomPane';
import hourRoomPane from '../../components/serviceComponents/hourRoomPane';
import calendar from '../../components/vueComponents/calendar';
import range from '../../components/vueComponents/range';
export default {
  components: {
    dayRoomPane,
    hourRoomPane,
    calendar,
    range
  },
  data (vm) {
    return {
      tabIndex: 0,
      tabList: [
        {
          index: 0,
          label: '全天房'
        },
        {
          index: 1,
          label: '钟点房'
        }
      ],
      dayRoomParams: {
        dayRange: [vm.$date(), vm.$date().add(1, 'days')],
        priceRange: ''
      },
      hourRoomParams: {
        dayRange: '',
        priceRange: ''
      },
    }
  },
  created() {
    this.$pubSub.subscribe(this.$pubSub.topic.SHOW_CALENDAR, () => {
      if (this.tabIndex === 0) {
        this.$refs.calendar.show()
      } else {
        this.$refs.singleCalendar.show()
      }
    })

    this.$pubSub.subscribe(this.$pubSub.topic.SHOW_RANGE, () => {
      this.$refs.range.show(this.tabIndex === 0
        ? this.dayRoomParams.priceRange
        : this.hourRoomParams.priceRange)
    })
  },
  methods: {
    onTabClick(tabItem) {
      if (tabItem.index === this.tabIndex) return;
      this.tabIndex = tabItem.index
    },
    calendarChange(val) {
      this.dayRoomParams.dayRange = val;
    },
    singleCalendarChange(val) {
      this.hourRoomParams.dayRange = val;
    },
    rangeChange(val) {
      this[this.tabIndex === 0 ? 'dayRoomParams' : 'hourRoomParams']['priceRange'] = val;
    }
  }
}
</script>
