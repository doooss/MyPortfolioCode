<template>
  <v-main>
    <div v-if="alert == true" class="fit_container deep-purple darken-4" >
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title>
          Skills Page         
        </v-card-title>
        <v-card-text>
          이 페이지는 제가 경험해본 개발 스킬들을 나열해 보았습니다. 물론 몇번 겨우 해본 것과 잘 알고 있는 사항은 다르다고 생각하기 때문에 해당 사항을 나누어 보았습니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{count}} 초 이후에 사라집니다. <v-btn color="transparent" elevation="0" @click="alert = false" >즉시닫기</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content">
            <v-card-title>
              HTML/CSS/JS (Publish)
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                Well-Known
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ 디자인이 주어진다면 그에 맞게 마크업 가능합니다. (NIKE페이지, EDIYA COFFEE, YOUTUBE 클론 경험)</v-list-item>
                  <v-list-item>✔ 슬라이더, 팝업, 스크롤바 등 간단한 UI 들의 JS 구현이 가능합니다 </v-list-item>
                  <v-list-item>✔ 반응형 웹, Grid, FlexBox을 충분히 이해하고 잘 활용할 수 있습니다.</v-list-item>
                  <v-list-item>✔ 각종 API를 공식문서보고 잘 연동할 수 있습니다. (카카오맵, 카카오 주소 연동 경험)</v-list-item>
                  <v-list-item>✔ SCSS의 사용에 익숙합니다.</v-list-item>                  
                  <v-list-item>
                    ✔ Jquery를 선호하진 않지만, Jqeury를 사용한 코드를 읽을 수 있으며, JS로 변환시킬수 있습니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                Try
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ 복잡한 애니메이션 영역은 구글링을 해보는 편입니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ SCSS/ SASS 사용시에 구글링을 해보면서 하는 편입니다.
                  </v-list-item>
                  <v-list-item>
                  </v-list-item>
                  <v-list-item>
                    ✔ 규격에 맞춘 작업을 할때는 구글링의 도움을 받습니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container brown lighten-3">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content">
            <v-card-title>
              Frontend(React,Vue,Next,Nuxt)
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                Well-Known
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ React, Vue 환경의 특수한 문법들은 대부분 숙지하고 있습니다.</v-list-item>
                  <v-list-item>✔ React 코드를 Functional Component 와 Class형 컴포넌트를 모두 사용할 줄 알고 있습니다.</v-list-item>
                  <v-list-item>✔ SSR Framework 중 Nuxt.js와 Next.js 에 익숙합니다. </v-list-item>
                  <v-list-item>✔ React Hooks와 그에 대응되는 Vue의 기능들을 숙지하고 있습니다.</v-list-item>
                  <v-list-item>✔ 라이프사이클에 대한 이해와 data Fetching 에 대한 이해를 하고 있습니다.</v-list-item>
                  <v-list-item>✔ State Management 에 대한 이해도가 있으며 활용 할 수 있습니다. (Vuex, MobX)</v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                Trying
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ 현재 Authorization 에 대한 공부를 하고 있습니다. (2021-12월 기준)
                  </v-list-item>
                  <v-list-item>
                    ✔ Redux의 시도를 많이 해보았으나 숙련도는 높지 않습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ React-Native 에 대한 시도를 해본 적 있으며, 대략적인 차이를 이해하고 있습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ React hooks 중 useMemo 와 useCallback 의 경우 이해는 하고 있으나 차이를 경험해본적은 없습니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>  
        <div class="fit_container blue-grey lighten-4">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content" >
            <v-card-title>
              Backend(node.js (express.js, nest.js))
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                WellKnown
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ REST API 를 어느정도 이해하고 있으며, 그 에 맞게 CRUD 구성할수 있습니다. </v-list-item>
                  <v-list-item>✔ bcrypt 와 jwt 를 이용하여 사용자 로그인/회원가입을 구현할 수 있습니다. </v-list-item>
                  <v-list-item>✔ DB연동 작업을 원할히 할 수 있습니다. ( 공식문서를 참고합니다. )</v-list-item>
                  <v-list-item>✔ 주로 프론트엔드 프레임워크를 이용하지만, 뷰 템플릿의 사용법을 숙지하고 있습니다. (ejs,handlebars) </v-list-item>
                  <v-list-item>✔ socket.io 라이브러리를 사용할 수 있습니다.</v-list-item>
                  <v-list-item>✔ Swagger 문서화 할수 있습니다.</v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                Trying
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ Pipe Pattern에 대한 이해는 하고 있으나 
                  </v-list-item>
                  <v-list-item>
                    ✔ SQL문의 여러가지 Relation을 갖는 데이터베이스를 다루는 것에 대한 이해도가 떨어집니다.
                  </v-list-item>
                  <v-list-item>                     
                    ✔ 테스팅 툴에 대한 이해도는 떨어집니다. (jest 시도는 해보았습니다)
                  </v-list-item>
                  <v-list-item>
                    ✔ 프론트엔드 분야와 동시에 Authorization에 대한 공부를 하고 있습니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="fit_container brown lighten-4">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content">
            <v-card-title>
              DBMS(MongoDB,MySQL, TypeORM)
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                Well-Known
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ 기본적인 DB 생성/ 연동 / 테이블생성 / 계정생성을 할 수 있습니다.</v-list-item>
                  <v-list-item>✔ AWS에 DB를 호스팅 하는 방법을 알고 있습니다.</v-list-item>
                  <v-list-item>✔ 복잡한 관계성이 없는 CRUD 작업이 가능합니다. </v-list-item>                  
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                Trying
              </v-card-title>
              <v-card-text>
                <v-list>                  
                  <v-list-item>
                    ✔ 복잡한 쿼리문을 짜는 경우 문법을 한번 더 보고, 테스트해보면서 합니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ SQL에는 많은 숙련도가 없으며 백엔드 작업시에는 주로 TypeORM을 이용합니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>  
        <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content">
            <v-card-title>
              Programming language( JS, TS)  
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                Javascript
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>👍 최신 자바스크립트 ESNext 까지 추가된 내용들을 숙지하고 잘 이용합니다. </v-list-item>
                  <v-list-item>👍 알고리즘의 수준은 프로그래머스 레벨 2단계 문제를 모두 푸는 정도입니다.</v-list-item>
                  <v-list-item>👍 ESlint, Prettier의 역할을 알고 있으며 항상 이용하고 있습니다. </v-list-item>                  
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                Typescript
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    👍 현재 대부분의 프로젝트를 타입스크립트로 작업하고 있습니다.(Next.js, Nest.Js, Node.js)
                  </v-list-item>
                  <v-list-item>
                    👍 타입 추론 파일에 대한 충분한 이해가 있으며 잘 활용합니다. 
                  </v-list-item>           
                  <v-list-item>
                    👎 순수 HTML/CSS/JS  환경의 정적 웹 환경에선 타입스크립트를 다뤄본 경험이 없습니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
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
    setInterval(()=>{
      this.count --
      if(this.count ===0){
        this.alert = false
      }
    },1000)
  }
}
</script>

<style>

</style>