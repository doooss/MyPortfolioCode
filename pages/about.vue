<template>
  <v-main>
    <div v-if="alert == true" class="fit_container deep-purple darken-4" >
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title>
          About Page         
        </v-card-title>
        <v-card-text>
          이 페이지의 목적은 성격을 알려드리는 페이지 입니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{count}} 초 이후에 사라집니다. <v-btn color="transparent" elevation="0" @click="alert = false" >즉시닫기</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col/>
          <v-col>
            <v-card>
              <v-card-title>
               <b> 기본에 집중하는 경향을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                &emsp; 무언가를 익힐때 기본에 집중하는 경향을 가지고 있습니다. <br/><br/>
                &emsp; 제가 생각하는 SPA 프레임워크들의 가장 중요한 점은 State 관리라고 생각합니다 <br/><br/> 
                &emsp; 백엔드에서 가장 중요한 것은 연동이 중첩되게 하지 않고, 협업하기 좋게 RESTAPI 를 지키는 것이라고 생각합니다. <br/><br/> 
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
                &emsp; 제가 개발자 공부를 하면서 가장 흥미를 느낀점은 다양한 방법이 있고 완벽한 정답은 없으며, 새로운 것이 계속 나온다는 점 입니다.<br/><br/>
                &emsp; 저는 node js (express)를 사용하면서 일정한 패턴이 없으니 규칙도 없고, 정돈되지 않은채로 코드를 짜고 있던 것을 보고 Nest js 라는 프레임워크를 익히게 되었습니다. 마찬가지로 순수 SQL 로는 node js 환경의 백엔드에서 관리하기 힘들어서 TYPEORM 을 익히게 되었습니다. <br/><br/>
                &emsp; 이런식으로 저는 필요하면 추가적으로 익히는 일에 두려움이 없고 즐기는 사람입니다. 
              </v-card-text>
            </v-card>
          </v-col>
          <v-col/>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col/>
          <v-col>
            <v-card>
              <v-card-title>
                <b>핵심적인 일을 먼저하는 습관을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                &emsp; 어떤 일을 할때 가장 중요한 핵심이 무엇인지를 먼저 생각하고 그 일 부터 해결한 후에 다른 일을 합니다.<br/><br/>
                &emsp; 웹 백엔드에서 가장 중요한 구성은 최초 서버 구성과 DB 연동이라 생각하고 그 작업부터 확인된 후 다른 작업을 진행합니다.<br/>
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
                &emsp;현재까지 제가 웹 개발자로서 공부해온 방향성은 웹 전체의 구조를 읽기 위한 방향으로 공부해왔습니다. <br/><br/>
                &emsp; 제가 생각하는 현재 최신 트렌드에 맞는 웹은 백엔드 서버를 따로 두고, 프론트영역에서 서버데이터를 받아 출력해 주는 방식입니다. 
              </v-card-text>
            </v-card>            
          </v-col>
          <v-col/>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col/>            
          <v-col>
            <v-card>
              <v-card-title>
                <b>한 문제에 대해서 다른 시각으로 볼 수 있는 능력을 가지고 있습니다.</b>
              </v-card-title>
              <v-card-text>
                 &emsp;개발자의 일은 코딩도 있지만, 코딩은 실행 방법 중 하나 일뿐, 문제를 해결해 나가는 것이라고 생각합니다. <br/><br/>
                &emsp; 이러한 문제 해결에 있어 시각의 다각화는 매우 중요하다고 생각합니다. 시각의 다각화 능력을 기르기 꾸준히 다양한 신문을 읽어왔으며 현재는 네이버/다음 포털을 동시에 보고있습니다.(의견이 많이 다릅니다.) <br/><br/>
                &emsp; 이런식으로 다각화 능력을 개발자 공부를 시각하기 전부터 길러왔고, 현재 개발자 업무에는 적합하다고 생각됩니다.
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
                &emsp; 저는 UI / UX 개발에 있어서 사용자의 편의성과 경험을 중시합니다. <br/><br/>
                &emsp; 제가 느낀 UX 에 대한 대형 포털의 대처는 네이버가 있습니다. 기존 사용자들이 많이 이용하는 메인 화면은 그대로인채로, 좀 더 젊은 세대가 이용하면 스포츠의 Esports 탭이나 그런것 들 우선적으로 조금 씩 바꿔가고 있습니다. <br/><br/>
                &emsp; 이렇게 대기업들도 대처하는 것을 보면서 UX에 대한 생각을 더 하게 되었습니다. 그 이후 저의 프론트엔드 디자인들은 프레임워크도 잘 정리되어있으며 , 사용자들이 많은 Google의 Material Design 패턴을 따라가기로 결심했습니다. <br/> 
              </v-card-text>
            </v-card>
          </v-col>
          <v-col/>            
        </v-row>
      </v-container>
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
      if(this.count ===0){
        this.alert = false
      }
    },1000)    
  }
}
</script>