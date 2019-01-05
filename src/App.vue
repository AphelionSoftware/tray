<template>
  <v-app app>
    <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/pages/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  }
}
</script>
