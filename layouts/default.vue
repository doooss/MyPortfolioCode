<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"            
      app
    >
      <v-list class="font-weight-medium">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div>
          <v-divider></v-divider>
          <v-list class="font-weight-medium">
            <v-list-item 
              href="https://github.com/ldy9212"
            >
              <v-list-item-action>
                <v-icon>
                  mdi-github
                </v-icon>
              </v-list-item-action>
              
              <v-list-item-content>
                <v-list-item-title>
                  GITHUB
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
      
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      app
      color="deep-purple darken-4"
      dark
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />     
      <v-toolbar-title >
        {{$store.state.title}}
      </v-toolbar-title>
      <v-spacer />
        <v-row>    
      <v-col></v-col>  
      <v-spacer/>
      <v-col  class="d-none d-md-flex my-auto justify-end" >
        <nuxt-link to="/" >
          <v-btn text>
            Home
          </v-btn>
        </nuxt-link>      

        <nuxt-link to="/skills" >
          <v-btn text>
            Skills
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/project">
          <v-btn text>
            project
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
 
        
        <v-btn icon href="https://github.com/ldy9212" >
          <v-icon>
            mdi-github
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    </v-app-bar>
    <transition name="mainToPage">
      <Nuxt/>
    </transition>
    <v-footer class="fit_container grey darken-4 " padless> 
      <v-card flat tile class="white--text mx-auto grey darken-4 text-center" dark >
        <v-card-title class="justify-center">
          Contact Me
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          Email : ldy9212@gmail.com<br/>
          Github : https://github.com/ldy9212<br/>
          Tel : (+82) 010-9002-1193<br/>
          이 포트폴리오의 코드는 <a class="white--text" href="https://github.com/ldy9212/MyPortfolioCode">https://github.com/ldy9212/MyPortfolioCode </a> 에 공개되어있습니다. <br/>
        </v-card-text>
        </v-card>
    </v-footer>
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
          icon: 'mdi-layers',
          title: 'Skills',
          to: '/skills'
        },
        {
          icon: 'mdi-presentation',
          title: 'Project',
          to: '/project'
        }   
      ],    
      title : 'Home'
    }
  } 

}
</script>
