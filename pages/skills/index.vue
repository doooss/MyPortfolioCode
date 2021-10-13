<template>
  <v-main>
    <div class="fit_container deep-purple darken-4" v-if="alert == true">
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title>
          Skills Page         
        </v-card-title>
        <v-card-text>
          이 페이지는 제가 가진 개발 스킬들을 나타낸 페이지 입니다. 페이지의 구성은 해당 섹션과 그 섹션에 대해서 구글링 없이도 구현할 수 있는 영역과 / 구글링의 도움이 필요한 영역으로 나누었습니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{count}} 초 이후에 사라집니다. <v-btn @click="alert = false" color="transparent" elevation="0">즉시닫기</v-btn>
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
                구글링 없이도 할 수 있는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ 디자인이 주어진다면 그에 맞게 마크업 가능합니다. (NIKE페이지, EDIYA COFFEE, YOUTUBE 클론 경험)</v-list-item>
                  <v-list-item>✔ 슬라이더, 팝업, 스크롤바 등 간단한 UI 들의 JS 구현이 가능합니다 </v-list-item>
                  <v-list-item>✔ 반응형 웹, Grid, FlexBox을 충분히 이해하고 잘 활용할 수 있습니다.</v-list-item>
                  <v-list-item>✔ 각종 API를 공식문서보고 잘 연동할 수 있습니다. (카카오맵, 카카오 주소 연동 경험)</v-list-item>                  
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                구글링의 도움을 받는 영역
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
                    ✔ JQuery에 많은 시간을 소요하지 않았지만, 구글링하면서 사용 가능합니다.
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
    <div class="fit_container brown lighten-4">
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
                구글링 없이도 할 수 있는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ REST API 를 어느정도 이해하고 있으며, 그 에 맞게 CRUD 구성할수 있습니다. </v-list-item>
                  <v-list-item>✔ bcrypt 와 jwt 를 이용하여 사용자 로그인/회원가입을 구현할 수 있습니다. </v-list-item>
                  <v-list-item>✔ DB연동 작업을 원할히 할 수 있습니다. ( 공식문서를 참고합니다. )</v-list-item>
                  <v-list-item>✔ MVC 패턴에 맞게 서버를 구축할 수 있습니다. </v-list-item>
                  <v-list-item>✔ 주로 프론트엔드 프레임워크를 이용하지만, 뷰 템플릿의 사용법을 숙지하고 있습니다. (ejs,handlebars) </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                구글에게 도움을 받는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ 프레임워크/ 라이브러리 도움없이 위 작업들을 구성해야 할때는 구글링의 도움을 받습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ 소켓통신은 타입 변수가 많아서 구글리의 도움을 받습니다.
                  </v-list-item>
                  <v-list-item>                     
                    ✔ 새로운 프레임워크 / 라이브러리를 사용할 경우 공식문서를 참조합니다 (or Github)
                  </v-list-item>
                  <v-list-item>
                    ✔ 보안 과정을 추가로 넣는 경우
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
              Frontend(React,Vue)
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                구글링 없이도 할 수 있는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ React, Vue 환경의 특수한 문법들은 대부분 숙지하고 있습니다.</v-list-item>
                  <v-list-item>✔ React의 Functional Component 방식으로 작업합니다</v-list-item>
                  <v-list-item>✔ Nuxt,Vuetify 작업이 원할 합니다.  </v-list-item>
                  <v-list-item>✔ React Hooks와 그에 대응되는 Vue의 기능들을 숙지하고 있습니다.</v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title >
                구글에게 도움을 받는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ UI Framework를 이용할 때 공식문서를 켜놓고 작업합니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ React 와 Vue 를 타입스크립트로 설정시 에러 방지를 위해 도움을 받습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ Fetch 나 Axios 이용시에 구글링 도움을 받습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ Redux의 경우 사용법이 항상 헷갈려서 따로 참고 페이지를 만들었습니다.(github)
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
                구글링 없이도 할 수 있는 영역
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>✔ 기본적인 DB 생성/ 연동 / 테이블생성 / 계정생성을 할 수 있습니다.</v-list-item>
                  <v-list-item>✔ CRUD에 맞게 사용가능 합니다. </v-list-item>                  
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="10" rounded="lg">
              <v-card-title>
                구글링의 도움을 받는 영역
              </v-card-title>
              <v-card-text>
                <v-list>                  
                  <v-list-item>
                    ✔ 복잡한 쿼리문을 짜는 경우 문법을 한번 더 보고, 테스트해보면서 합니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ AWS 에 MySQL 호스팅을 할 때, 구글의 도움을 받습니다.
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
                  <v-list-item>👍 최신 자바스크립트 ES2021 까지 추가된 내용들을 숙지하고 잘 이용합니다. </v-list-item>
                  <v-list-item>👍 알고리즘의 수준은 프로그래머스 레벨 2단계 문제를 모두 푸는 정도입니다.</v-list-item>
                  <v-list-item>👍 babel,ESlint, Prettier의 역할을 알고 있으며 항상 이용하고 있습니다. </v-list-item>                  
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
                    👍 현재 모든 프로젝트를 타입스크립트로 작업하고 있습니다.(React.TSX, Vue.Ts, Nest.Js)
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
      if(this.count ==0){
        this.alert = false
      }
    },1000)
  }
}
</script>

<style>

</style>