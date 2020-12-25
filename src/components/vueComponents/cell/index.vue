<template>
  <view class="cell-wrapper" @tap="onCellClick">
    <view class="cell-block title">{{title}}</view>
    <view class="cell-block content">
      <view class="value" v-if="value">
        <slot name="cell-value">
          {{value}}
        </slot>
      </view>
      <view class="placeholder" v-else>{{placeholder}}</view>
    </view>
    <view class="cell-block suffix">
      <image class="arrow" src="../../../assets/img/clips/cell-arrow.png"></image>
    </view>
    <view class="cell-block custom">
      <slot></slot>
    </view>
  </view>
</template>

<script>
import './index.scss';
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Array, Date],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onCellClick () {
      this.$emit('on-click')
    }
  }
}
</script>
