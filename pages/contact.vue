<template>
  <v-main>
    <div class="contact_page fit_container indigo darken-4">
      <v-card elevation="12" shaped width="" dark>
        <v-card-title>
          Contact Me
        </v-card-title>
        <v-card-text>
          E-mail : ldy9212@gmail.com
        </v-card-text>
        <v-card-text>
          Github : 
        </v-card-text>
      </v-card>
    </div>
  </v-main>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('changeTitle', 'Contact')    
  }
}
</script>