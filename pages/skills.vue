<template>
  <Nuxt />
</template>

<script>
export default {
  layout: 'skills',
  mounted() {
    this.$store.commit('changeTitle', 'Skills');
  },
};
</script>
