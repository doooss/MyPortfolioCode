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
               <b> 기본에 집중하는 경향을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                ✔ 무언가를 익힐때 기본에 집중하는 경향이 있습니다. 웹 백엔드로 에서는 REST API 를 치키면서 MVC 패턴으로 프로그래밍을 구성할 줄 알고 있으며 그러한 패턴으로 코딩을 하고 있습니다.<br/>
                ✔ 프론트 엔드에서는 아직 좋은 패턴이 어떤식으로 구성하는 것인지 정확히는 모르겠기 때문에 일정한 양식을 구성해주는 Nuxt Js 를 많이 이용하는 편 입니다.
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
                <b>새로운 것을 익히는 것을 좋아합니다.</b> 
              </v-card-title>
              <v-card-text>
                ✔ 저는 개발 공부를 시작한 이후에 시간대비 많은 기술들을 익혀왔습니다.<br/>
                ✔ 물론 다양한 것을 공부한 다는 것은 상대적으로 얕게 공부하는 것이 되기 때문에 전문성이 결여 될 수도 있습니다. <br/>
                ✔ 하지만, 웹 기술이라는 것이 방향성이 어찌됬든 거의 비슷하기 때문에 사용하는 방식도 거의 유사하다는 것을 알게 되었습니다. <br/>
                ✔ 저는 계속해서 다양한 라이브러리/ 프레임워크를 시도하고 선택권을 갖는 개발자가 되고 싶습니다.  
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
                ✔ 어떤 일을 할때 가장 중요한 핵심이 무엇인지를 먼저 생각하고 그 일 부터 해결한 후에 다른 일을 합니다.<br/>
                ✔ 웹 백엔드에서 가장 중요한 구성은 최초 서버 구성과 DB 연동이라 생각하고 그 작업부터 확인된 후 다른 작업을 진행합니다.<br/>
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
                <b>전체적인 구조를 우선적으로 보는 능력을 가지고 있습니다. </b>
              </v-card-title>
              <v-card-text>
                ✔ 제가 웹 개발자로서 공부해온 방향성이 모두 전체적인 구조를 보기 위해서 였습니다.<br/> 
                ✔ 제가 생각 하는 웹의 구성은 백엔드에서 해당되는 Data를 구성하는 API를 만들고, 프론트엔드에선 그를 ajax요청으로 불러와서 보여주는 웹이 좋은 웹이라고 생각합니다.
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
                <b>한 문제에 대해서 다른 시각으로 볼 수 있는 능력을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                어떤 경우에는 오히려 기능을 빼버리는게 해결책이라는 말이 있습니다. 저는 그런 생각을 항상 고려해 보면서 개발일을 하고 있습니다.
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
                <b> 항상 사용자의 입장에서 개발을 진행하고 있습니다. </b>
              </v-card-title>
              <v-card-text>
                현재 제가 좋아하는 디자인 패턴은 Google이 만든 Material Design 패턴입니다. 모바일이 더 친화적인 패턴이나, 모바일이든 웹이든 사용자 친화적인 패턴이라고 생각하기 때문입니다.

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