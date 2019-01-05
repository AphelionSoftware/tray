<template>
  <v-content>
    <v-layout>
      <v-flex>
        <v-card
        flat
        min-height="300px"
        width="300px">
          TEST
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
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
  },
  methods: {
    /**
     * 概要
     * @param {string} val: 説明
     */
    tmp () {

    }
  },
  props: {
    prop1: {
      type: String,
      default: 'default',
      required: true // requiredは必ず要求するプロパティ
    }
  },
  computed: {

  },
  /**
   * インスタンスが初期化されるときに同期的に呼ばれる
   */
  beforeCreate () {

  },
  /**
   * インスタンスが作成された後に同期的に呼ばれる
   */
  created () {

  },
  /**
   * インスタンスがマウントされる前に呼ばれる
   * templateオプションがrender関数にコンパイルされた後に実行される
   * （templateオプションが無い場合は、elで指定したouterHTMLをコンパイルする）
   */
  beforeMount () {

  },
  /**
   * インスタンスがマウントされた後に呼ばれる
   * DOM要素にアクセスできるようになる（this.$el）
   */
  mounted () {

  },
  /**
   * 状態を更新し、Virtual DOMが再描画される前に呼ばれる
   * つまり、beforeUpdate内で状態を取得すると更新後の値になっている
   */
  beforeUpdate () {

  },
  /**
   * 状態を更新し、Virtual DOMが再描画された後に呼ばれる
   * 状態変更後のDOM要素にアクセスする場合は、updated内で取得すると良い
   * ただし、updated内で状態を更新すると無限ループに陥る可能性がある
   * （状態を更新してループを抜ける条件をちゃんと実装しておく必要がある）
   */
  updated () {

  },
  /**
   * インスタンスが破棄される前に呼ばれる
   * この段階ではインスタンスはまだ完全に機能している
   */
  beforeDestroy () {

  },
  /**
   * インスタンスが破棄された後に呼ばれる
   */
  destroyed () {

  }
}
</script>

<style lang="scss" scoped>
</style>
