<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <hr>
    <h1>{{ $store.state.count }}</h1>
    <h1>{{ $store.getters.getCount }}</h1>
    <el-button @click="onChange">+</el-button>
    <router-link :to="{name: 'home'}">home</router-link>
  </div>
</template>

<script>
export default {
  computed: {

  },
  mounted() {
    // console.log(this.$store)
    // console.log(this.$store.state)
  },
  methods: {
    onChange() {
      // this.$store.commit('increment')
      this.$store.commit('SET_COUNT', [])
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &.container {
    background: aqua;
  }
}
</style>
