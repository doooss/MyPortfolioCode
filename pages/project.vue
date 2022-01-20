<template>
  <Nuxt />
</template>

<script>
export default {
  layout: 'project',
  mounted() {
    this.$store.commit('changeTitle', 'Project');
  },
};
</script>
