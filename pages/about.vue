<template>
  <v-main>

  </v-main>
</template>

<script>
export default {
  mounted(){
    this.$store.commit('changeTitle', 'About')    
  }
}
</script>

<style>

</style>