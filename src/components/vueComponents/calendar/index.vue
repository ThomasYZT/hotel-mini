<template>
  <van-calendar
    :show="visible"
    :type="type"
    @close="onCalendarClose"
    @confirm="onCalendarConfirm"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, String, Date],
      default () {
        return ''
      }
    },
    type: {
      type: String,
      default: 'range'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    onCalendarClose () {
      this.visible = false
    },
    onCalendarConfirm (val) {
      this.$emit('input', val.detail)
      this.$emit('on-change', val.detail)
      this.visible = false
    },
  }
}
</script>

<style scoped>

</style>
