<template>
  <div id="Empty">
  </div>
</template>

<script>
// import sample from './../sample/sample.json'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
  },
  data () {
    return {
      msg: 'Empty',
      source: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
