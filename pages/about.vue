<template>
  <v-main>
    <div class="fit_container deep-purple darken-4" v-if="alert == true">
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title>
          About Page         
        </v-card-title>
        <v-card-text>
          이 페이지의 목적은 성격을 알려드리는 페이지 입니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{count}} 초 이후에 사라집니다. <v-btn @click="alert = false" color="transparent" elevation="0">즉시닫기</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>
                <b>새로운 것을 익히는 것에 자신있습니다.</b> 
              </v-card-title>
              <v-card-text>
                저는 다른 사람들보다 좀 더 쉽게 쉽게 배우는 경향이 있습니다. <br/>
                현재 개발자가 되기 위해 공부를 시작 한 후로도 여러가지 기술 들을 <br/>
                남들보다 빠르게 습득하고 있다고 자부할 수 있습니다.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
               <b> 기본에 집중하는 경향을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                무언가를 익힐때 기본에 집중하는 경향이 있습니다. 프레임워크, 라이브러리 들을 이용하다보면 해당 프레임워크/라이브러리 가 지향하는 코드 폼 같은 것들이 보입니다. 저는 그것을 기준으로 코드를 짜려고 노력합니다.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>
                <b>핵심적인 일을 먼저하는 습관을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                어떤 일을 할때 가장 중요한 핵심이 무엇인지를 먼저 생각하고 그 일 부터 해결한 후에 다른 일을 합니다. 
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <b> </b>
              </v-card-title>
              <v-card-text>
                
              </v-card-text>
            </v-card>            
          </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>
                전체적인 숲을 보는 능력을 가지고 있습니다.
              </v-card-title>
              <v-card-text>
                개발자로서 본다면 어떤 과제가 주어졌을때 어떤 기술들이 필요하고, 무엇을 해야하는가 , 어떻게 해야 협업자들이 쉽게 일할 수 있는가 이런 점들을 볼 수 있는 능력이 있습니다.  
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                몰입형 인간입니다.
              </v-card-title>
              <v-card-text>
                 
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      
    </div>
  </v-main>
</template>

<script>
export default {
    data(){
    return{
      count : 10,
      alert : true,
    }
  },
  mounted(){
    this.$store.commit('changeTitle', 'About');
    setInterval(()=>{
      this.count --
      if(this.count ==0){
        this.alert = false
      }
    },1000)    
  }
}
</script>