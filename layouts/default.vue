<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="deep-purple darken-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />     
      <v-toolbar-title v-text="title" />
      <v-spacer />
        <v-row>    
      <v-col></v-col>  
      <v-spacer/>
      <v-col  class="d-none d-md-flex my-auto justify-end" >
        <nuxt-link to="/">
          <v-btn text>
            Home
          </v-btn>
        </nuxt-link>
        
        <nuxt-link to="/about">
          <v-btn text>
            About
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/knowledge">
          <v-btn text>
            Knowledge
          </v-btn>
        </nuxt-link>
      </v-col>
      <v-col   class="d-none d-sm-flex justify-end">
        <nuxt-link to="/">
          <v-btn icon >
            <v-icon>
              mdi-home
            </v-icon>
          </v-btn>  
        </nuxt-link>
        
        <NuxtLink to="/email">
          <v-btn icon> 
            <v-icon>
              mdi-gmail
            </v-icon>
          </v-btn>
        </NuxtLink>
        
        <v-btn icon href="https://github.com/ldy9212" >
          <v-icon>
            mdi-github
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    </v-app-bar>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'About Me',
          to: '/about'
        },
        {
          icon: 'mdi-layers',
          title: 'Stack',
          to: '/stacks'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title : 'Home'
    }
  }
}
</script>
