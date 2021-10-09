<template>
  <v-app>
    <Nuxt/>
  </v-app>
</template>

<script>
export default {
  layout:'skills',
  mounted(){
    this.$store.commit('changeTitle', 'Skills')    
  }
}
</script>

<style>

</style>