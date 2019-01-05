<template>
  <v-app app>
    <popup/>
  </v-app>
</template>

<script>
import Popup from './components/views/Popup'

export default {
  name: 'App',
  components: {
    Popup
  },
  data () {
    return {
    }
  }
}
</script>
