<template>
  <v-main>
    <div v-if="alert == true" class="fit_container deep-purple darken-4">
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title> Skills Page </v-card-title>
        <v-card-text>
          이 페이지는 제가 경험해본 개발 스킬들을 나열해 보았습니다. 스킬들은
          Familiar Abily 와 Poor Abilty 로 나누어 작성해 보았습니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{ count }} 초 이후에 사라집니다.
          <v-btn color="transparent" elevation="0" @click="alert = false"
            >즉시닫기</v-btn
          >
        </v-card-text>
      </v-card>
    </div>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-card class="ma-auto" width="fit-content">
            <v-card-title> HTML/CSS/JS (Publish) </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Familiar Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ Flexbox, Grid, Media query 를 적절히 사용하여 CSS를 이용한
                    반응형 웹 구현을 할 수 있습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ CSS-in-JS(Styled-Components, emotion.js) 을 이용한
                    컴포넌트 단위로 주로 개발하고 있습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ MUI, Vuetify, Bootstrap, 등의 UI Framework 를 사용한
                    작업이 가능합니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ AJAX 작업에 익숙합니다. (Axios, Fetch)
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Poor Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ Jquery에 대한 이해도는 떨어지나, 코드를 읽고 어떤내용인지
                    이해하여 JS 로 수정하는 능력은 가지고 있습니다.
                  </v-list-item>
                  <v-list-item
                    >✔ HTML/CSS 관련 라이브러리들을 사용할 자신은 있으나, 아직
                    사용 경험은 적습니다. (d3.js, swiper.js ...)
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
            <v-card-title> Frontend(React,Vue,Next,Nuxt) </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Familiar Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ React 코드의 컴포넌트 방식인 Functional Component 와 Class
                    Component를 모두 사용할 줄 알고 있습니다. (FC 선호)
                  </v-list-item>
                  <v-list-item>
                    ✔ React, Vue의 SSR 프레임워크인 Nuxt.js 와 Next.js에
                    익숙합니다.
                  </v-list-item>
                  <v-list-item
                    >✔ React Hooks와 그에 대응되는 Vue의 기능들을 숙지하고
                    있습니다.
                  </v-list-item>
                  <v-list-item
                    >✔ State Management 에 대한 이해도가 있으며 활용 할 수
                    있습니다. (MobX, Redux, Vuex)</v-list-item
                  >
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Poor Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ lazy-loading 등 웹 최적화 기법을 공부 중 입니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ React-Native 에 대한 시도를 해본 적 있으며, 대략적인
                    차이를 이해하고 있습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ React hooks 중 useMemo 와 useCallback 의 경우 이해는 하고
                    있으나, 실전으로 활용해 본적은 없습니다.
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
          <v-card class="ma-auto" width="fit-content">
            <v-card-title>
              Backend(node.js (express.js, nest.js))
            </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Familiar Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    >✔ REST API 를 어느정도 이해하고 있으며, 그 에 맞게 CRUD
                    구성할수 있습니다.
                  </v-list-item>
                  <v-list-item
                    >✔ bcrypt 와 jwt 를 이용하여 사용자 로그인/회원가입을 구현할
                    수 있습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ DB연동 작업을 원할히 할 수 있습니다. ( 공식문서를
                    참고합니다. )
                  </v-list-item>
                  <v-list-item
                    >✔ 주로 프론트엔드 프레임워크를 이용하지만, 뷰 템플릿의
                    사용법을 숙지하고 있습니다. (ejs,handlebars)
                  </v-list-item>
                  <v-list-item>
                    ✔ 소켓 통신에 대한 이해도가 있습니다 . (socket.io)
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Poor Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ SQL문의 여러가지 Relation을 갖는 데이터베이스를 다루는
                    것에 대한 이해도가 떨어집니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ 테스팅 툴에 대한 이해도는 떨어집니다. (jest 시도는
                    해보았습니다)
                  </v-list-item>
                  <v-list-item>
                    ✔ Apollo client 에 대한 이해도는 있으나 실질적으로 활용해 본
                    적은 없습니다.
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
            <v-card-title> DBMS(MongoDB,MySQL, TypeORM) </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Familiar Ability </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    >✔ 기본적인 DB 생성/ 연동 / 테이블생성 / 계정생성을 할 수
                    있습니다.</v-list-item
                  >
                  <v-list-item
                    >✔ AWS에 DB를 호스팅 하는 방법을 알고 있습니다.</v-list-item
                  >
                  <v-list-item
                    >✔ 복잡한 관계성이 없는 CRUD 작업이 가능합니다.
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Poor Ability</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    ✔ 데이터 정규화에 대한 지식이 얕습니다.
                  </v-list-item>
                  <v-list-item>
                    ✔ SQL에는 많은 숙련도가 없으며 백엔드 작업시에는 주로
                    TypeORM을 이용합니다.
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
            <v-card-title> Programming language( JS, TS) </v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Javascript </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    >👍 최신 자바스크립트 ESNext 까지 추가된 내용들을 숙지하고
                    잘 이용합니다.
                  </v-list-item>
                  <v-list-item
                    >👍 알고리즘의 수준은 프로그래머스 레벨 2단계 문제를 모두
                    푸는 정도입니다.</v-list-item
                  >
                  <v-list-item
                    >👍 ESlint, Prettier의 역할을 알고 있으며 설정법을 알고
                    있습니다.
                  </v-list-item>
                  <v-list-item>
                    👍 동기 / 비동기 통신에 익숙하며, reactive programming 에
                    대한 이해도 하고 있습니다. (rx.js)
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="10" rounded="lg">
              <v-card-title> Typescript </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    👍 현재 대부분의 프로젝트를 타입스크립트로 작업하고
                    있습니다.(Next.js, Nest.Js, Node.js)
                  </v-list-item>
                  <v-list-item>
                    👍 타입 추론 파일에 대한 충분한 이해가 있으며 잘 활용합니다.
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
  data() {
    return {
      count: 10,
      alert: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.count--;
      if (this.count === 0) {
        this.alert = false;
      }
    }, 1000);
  },
};
</script>

<style></style>
