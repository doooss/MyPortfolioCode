<template>
  <v-main>
    <div class="main1_container deep-purple darken-4">
      <v-row>
        <v-col cols="8" class="mx-auto my-15">
          <v-card dark color="transparent" elevation="0">
            <div class="main1_title main1_title_1">
              <p class="d-none d-sm-flex">Lee do young&nbsp;'&nbsp;s</p>
              <p>&nbsp;&nbsp;Portfolio </p>  
            </div>
          </v-card>
          <v-card dark color="transparent" elevation="0">
            <v-container>
              <v-row class="my-15">
                <v-col md="9" lg="8" >
                </v-col>
                <v-col class="my-10" md="3" lg="4" >
                  <div class="main1_title main1_title_2">                    
                    <p>이두영 &nbsp; </p>
                    <p> &nbsp;| &nbsp; WEB Developer</p>                    
                  </div>              
                </v-col>               
              </v-row>
            </v-container>            
            </v-card>
        </v-col>        
      </v-row>
    </div>
    <article class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row class="my-10">
          <v-spacer></v-spacer>
          <v-card color="transparent" flat>
            <v-card-title class="text-h4">
             <b> SKILLS SUMMARY </b>
            </v-card-title>
          </v-card>
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="my-10">          
          <v-col sm="6" md="3" xl="2" class="mx-auto">
            <v-card class="main2_card" elevation="12">
              <v-card-title>
                Language
              </v-card-title>
              <v-divider/>
              <v-card-content class="my-auto">
                <v-list-item v-for="(a,i) in langData" :key="i" class="my-10">
                  <v-img 
                    :src="a.img"
                    :alt="a.title"
                    contain
                    height="180"
                  />                 
                </v-list-item>
              </v-card-content>
            </v-card>
          </v-col>
          <v-col sm="6" md="3" xl="2" class="mx-auto">
            <v-card class="main2_card" elevation="12">
              <v-card-title>
                Back-End
              </v-card-title>
              <v-divider/>
              <v-card-content class="my-auto">
                <v-list-item v-for="(a,i) in backEndData" :key="i" class="my-10">
                  <v-img 
                    :src="a.img"
                    :alt="a.title"
                    contain
                    height="110"
                  />                  
                </v-list-item>
              </v-card-content>
            </v-card>
          </v-col>
          <v-col sm="6" md="3" xl="2" class="mx-auto" >
            <v-card class="main2_card" elevation="12">
              <v-card-title>
                Front-End
              </v-card-title>
              <v-divider/>
              <v-card-content class="my-auto"> 
                <v-list> 
                <v-list-item v-for="(a,i) in frontEndData" :key="i" class="my-10"> 
                  <v-img 
                    :src="a.img"
                    :alt="a.title"
                    contain
                    height="80"
                  />
                </v-list-item>
                </v-list>
              </v-card-content>
            </v-card>
          </v-col>          
          <v-col sm="6" md="3" xl="2"  class="mx-auto">
            <v-card class="main2_card" elevation="12">
              <v-card-title>
                DBMS
              </v-card-title>
              <v-divider/>
              <v-card-content class="my-auto">
                <v-list> 
                <v-list-item v-for="(a,i) in dBMSData" :key="i" class="my-10"> 
                  <v-img 
                    :src="a.img"
                    :alt="a.title"
                    contain
                    height="90"
                  />
                </v-list-item>
                </v-list>
              </v-card-content>
            </v-card>
          </v-col>   
        </v-row>
        <v-row>
          <div class="mx-auto">
            <nuxt-link to="/skills">
              <v-btn color="cyan darken-4" dark>
                자세히 보기
                <v-icon right>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </nuxt-link>         
          </div> 
        </v-row>        
      </v-container>
    </article>
    <article class="fit_container teal lighten-5"> 
      <v-container>
        <v-row>
          <v-col cols="auto" md="6">
            <div class="flex_wh100 ma-auto ">
              <h2 class="ma-auto">저는 이런 개발자 입니다.</h2>
            </div>
          </v-col>
          <v-col  cols="auto" md="6">
            <v-list color="transparent">
              <v-list-item>✔ 기본에 집중하는 경향을 가지고 있습니다.</v-list-item>
              <v-list-item>✔ 새로운 것을 익히는 것을 좋아합니다.</v-list-item>
              <v-list-item>✔ 핵심적인 일을 파악하고 먼저하는 습관을 가지고 있습니다.</v-list-item>
              <v-list-item>✔ 전체적인 구조를 우선적으로 보는 능력을 가지고 있습니다.</v-list-item>
              <v-list-item>✔ 한 문제에 대해서 다른 시각으로 볼 수 있는 능력이 있습니다.</v-list-item>
              <v-list-item>✔ 항상 사용자의 입장에서 개발을 진행하고 있습니다.</v-list-item>
            </v-list>
            <div class="main_btn_3">
              <nuxt-link to="/about">
              <v-btn color="cyan darken-4" dark>
                자세히 보기
                <v-icon right>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              </nuxt-link>
            </div>
          </v-col>        
        </v-row>
          
        <v-row class="mt-10">
          <div class="mx-auto">
                  
          </div> 
        </v-row>        
      </v-container>      
    </article>
    <article class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-card  color="transparent" flat>
            <v-card-title class="text-h5">
              <b>진행해온 프로젝트들</b>
            </v-card-title>
          </v-card>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>  
          <v-col>
            <v-card width="480" class="mx-auto">
              <v-img
              src="https://lh3.googleusercontent.com/pw/AM-JKLU8aZ-cOVzNYlrTyN2kme9ulyX_sNE7nNJdjG1sQDkfLrADQpT_hqtCqh9d7mjINVl0uIpLkgF7bg4fGj_GtaDU58rnErEzqBRlLsR5sZxy7zxNPs80G9LZQCp4VNahcRHf0gTozQhQx6UfNia3PEYL=w1880-h928-no?authuser=0"
              alt="chatting App Swagger Docs"
              width="480"
              height="270"
              />              
              <v-card-title>
                Chatting App 
              </v-card-title>
              <v-card-subtitle>
                소켓프로그래밍을 시도해본 프로젝트
              </v-card-subtitle>  
            </v-card>  
          </v-col>   
          <v-col> 
          <v-card width="480" class="mx-auto">
              <v-img
                src="https://lh3.googleusercontent.com/pw/AM-JKLXq1Kcdt-u21XxyW2GQAh_PTK5QpcoBJksJzGnIqeQcfvrERsNqxgo2bMMr7oZdVnVAl6FnPrLn6zP3joWd7S1l6Ww2Sv77jciQN2Sy_ngxi-s8d3wiYSS1h5FLp6zGrifacz0kRVUW4RSlUdwwDm9r=w1920-h969-no?authuser=0"
                alt="kiosk project img"
                width="480"
                height="270"  
              />
            <v-card-title>
              Kiosk App 
            </v-card-title>
            <v-card-subtitle>
              Web으로 간이 Kiosk를 구연해보는 프로젝트
            </v-card-subtitle>
          </v-card>
          </v-col>        
        </v-row>
        <v-row class="mt-10">
          <div class="mx-auto">
            <nuxt-link to="/project">
              <v-btn color="cyan darken-4" dark>
                자세히 보기
                <v-icon right>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </nuxt-link>         
          </div> 
        </v-row>        
      </v-container>  
    </article>
  </v-main>
</template>

<script>
export default {
  data(){
    return{
      langData : [
        {
          title :'Typescript',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLVphY1s-52iTRhG2J2Ux6ShIJZXR_5j5QScZE1Vm4jL1efWMx5P76zo3vb288ah4XXtnw0809tU1b2T9OZY36-FRxzFgu-3rX2bT_kv7rQ2E-pQtRmefHhHV1YkCoIEp4Bf1ec_Uv7cVvHCSi92DANk=s600-no?authuser=0'
        },
        {
          title :'Javascript',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLXzo-a_neNuopg5VLmDWaRo_rJIXxCPcMMPcIs31NTjTOf6qKF2ajx6xJFnnjqpSwgXjspefZF8oMmmaw3nAblyZmBfqBrXrXedwToaHSsd_ZeX5V_9LK71fa0L2M6NXddBOjgH7mt1-mkCne5e-831=s300-no?authuser=0'
        }
      ],
      backEndData : [
        {
          title : 'Node js',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLWvNFJrABzAVnzoR1ocUUFrJwVstP9o1Txf91X73yEqEzZAtJqHXf_mNpuhBk1qmYO2pYb1_4vmJ89ch_-rdhGCqUT3ECP5EWU6Lf37hSsiv8KyzaTeJw6c-2-ti_oY-NmPyMSrdrelT0ylI9vnh0sl=w1200-h734-no?authuser=0'
        },
        {
          title : 'Express js',
          img : 'data:image/jpeg;base64,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'
        },
        {
          title : 'Nest js',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLU9U4J8XSjdi-gQIyXkoe3mbSwz_xduH036aQSvlNGYORk8UuWMuyBDO6bZ4jJaHzX9bElfucMsS4J3Hpr8CPam_0o1itHlZyN3wqnVBSAktcXc3Hj3zdJGJ-UOgpvHBV9_cuWU2Zsj54EVfX9Af2E_=w300-h299-no?authuser=0'
        }
      ],
      frontEndData : [
        {
          title : 'React js',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLVwgoK7unCokaTbNH1z5xovXABT0-3c1rYABJkLvvhpZfFl18HD34G1MwEdESYQUj5V9hX_FKRJIT-C9WMWAa7Rm4WQV7EAWSSz8rNjgJc3D7d7BXqFXtmFBMOn2plkHU2LXp7G-pDRdJ1J8uAo7UFH=w300-h270-no?authuser=0'

        },
        {
          title : 'Vue js',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLWWO2uNPxXFlbLiaowBPr421Ddn_ZWFwZsmaIPOiMFAzmU5wkQo1lXT5Yu6UdaySnZQz9JvbSvPoVdIs7xexxas8mZ7pTx39ilwsz6qT4c1xeAGFNU4cKJn75EXDffG-LEmB3efmS81qOs5qxx2WFRy=w300-h259-no?authuser=0'
        },
        {
          title : 'Material UI',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLWPIkNDyG0LRpTjtt5si6MevMlVpU4KGoHwi-SvVeUcsjKLxKKPKmtvALMvJ4huRb4LuVGR_fXuPu1ZIEiCx02c7T5yhRgUPn-OC1nyP3wwcYWRbtDnHyFVZWpTaaM_Oc8SkGOTsIQxWyA22LzAWBmi=w300-h239-no?authuser=0'       
        },
        {          
          title : 'Vuetify',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLWzpVVryaRdQbO0uNnk2Piwe_1zfvNgSdwpgSv95P1OKz5Tr8McLvg6ECJag-UIxV6OEhGe6xrhrWTYrdaTv-HVnKiBEH7YCx3BF0PhcsMJqrTlwtq5yn2qZrXuz8T5B93kb85GcYXbRQbXAch06-VF=w263-h300-no?authuser=0'
        }
      ],
      dBMSData:[
        {
          title : 'MYSQL',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLWs4RV7YTeKACQP9vKgBjjx8JpNzZRrdjlVpl-s5M8vBOKyFPEaifLXUcyWjfkFZDN23EGakoQIDi445kOfVg6lXFxjeUPRdK1_waFxRXKaEm3UVvTsh6Hbssr62H6EP_CHlwsCw0s7OS36uk458bLg=w300-h204-no?authuser=0'        },
        {
          title : 'MongoDB',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLXAil7qHx0Y0oE8FEiBdetSkHqpkQaMVD_O5eOlzZU2EtMRDfkOeu9U4cUYafISiDJAhx_pnwKbAzr7CUA-w57nNgGKZRXkpLObNNz91Te63Os5SJpaW9kIOTpCnxefsSuAyRl8svvj-GG-HPRdEanW=w464-h204-no?authuser=0'
        },
        {
          title : 'TypeORM',
          img : 'https://lh3.googleusercontent.com/pw/AM-JKLUjABJx3KtuXYaf9D-607h12YXz_elUym2f19kJRcR1WiQyQRtlcSQIJ5A3JQ55IqHyp3zfon4QbDz7x4aZ9GUJSt1amR85CTpPbG3qLr6Yy7jlBJ3hbyUMHYSRl7KL6hc_-rlqmqF1v1vb5UUByTop=w1000-h420-no?authuser=0'
        }
      ]
    }
  },
  mounted(){
    this.$store.commit('changeTitle', 'Home')    
  },
  methods:{
    changeTitle(param){
      this.$store.commit('changeTitle', param)
    }
  }
}
</script>

<style>

</style>