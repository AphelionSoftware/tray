<template>
  <option-temp />
</template>

<script>
import OptionTemp from './../templates/OptionTemp'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    OptionTemp
  }
}
</script>

<style lang="scss" scoped>
</style>
