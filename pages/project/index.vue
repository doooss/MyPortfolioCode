<template>
  <v-main>
    <div class="fit_container deep-purple darken-4" v-if="alert == true">
      <v-card dark tile elevation="0" color="deep-purple darken-4">
        <v-card-title>
          Project Page         
        </v-card-title>
        <v-card-text>
          이 페이지의 목적은 제가 해온 프로젝트를 소개하는 페이지 입니다.
        </v-card-text>
        <v-card-text>
          설명란은 {{count}} 초 이후에 사라집니다. <v-btn @click="alert = false" color="transparent" elevation="0">즉시닫기</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div class="skills_container">
      <v-container>
        <v-row>
          <v-col>

          </v-col>
          <v-col>
            <v-card>
              <v-card-title>
                Chatting App Project
              </v-card-title>
              <v-card-subtitle>
                Socket 프로그래밍의 입문 , 제가 최초로 백엔드와 프론트엔드를 분리하여 제작한 프로젝트
              </v-card-subtitle>
              <v-card-text>
                소켓 프로그래밍을 한번 해보고 싶어서 진행한 프로젝트 입니다. <br/>
                이 프로젝트를 하기 이전에는 잘 생각 하지 못했던 프론트 엔드와 백엔드 영역을 분리하는 시도를 하였습니다. <br/>
                결과적으로는 결과물을 만들어내지 못하고 중단한 프로젝트 입니다. <br/>
                하지만, 분리를 시도하면서 REST API, AJAX 통신, Socket 프로그래밍에 대한 공부를 많이 하게 되었습니다 <br/>
                                 
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" dark>Typescript</v-btn>
                <v-btn dark>NestJS</v-btn>
                <v-btn color="teal" dark>NuxtJs</v-btn>
                <v-btn color="primary" dark>vuetify</v-btn>
                <v-btn color="green" dark>MongoDB</v-btn>
                <v-btn color="green" dark>mongoose</v-btn>
                <v-btn color="blue-grey darken-2" dark>AWS</v-btn>
                <v-btn color="teal" dark>Swagger</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="skills_container ">
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                React TSX Tutorial
              </v-card-title>
              <v-card-subtitle>
                React TSX 를 공부하면서 정리한 사이트
              </v-card-subtitle>
              <v-card-text>
                Typescript 에 입문한 이후, 다시 리액트를 사용해 보니 여러가지 타입에러를 겪게 되었습니다. <br/>
                실무에서 이런 상황에 잘 대처하기 위해 TSX 환경에서 Hooks 사용법을 정리하면서 만들어본 토이 프로젝트입니다. <br/>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" dark>Typescript</v-btn>
                <v-btn color="primary" outlined>React.js</v-btn>
                <v-btn color="purple darken-4" dark>Redux</v-btn>
                <v-btn color="primary" dark>Material UI</v-btn>
              </v-card-actions>
            </v-card>
           
          </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="skills_container">
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-card>
              <v-card-title>
                Kiosk
              </v-card-title>
              <v-card-subtitle>
                Kiosk를 실전으로 만들어 보는 프로젝트- 현재 진행중
              </v-card-subtitle>
              <v-card-text>
                현재 시장에 급증한 키오스크들을 보고 웹 앱으로도 만들수 있겠다 생각이 들어서
                만들어 보고 있습니다. 
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">
                  Typescript 
                </v-btn>
                <v-btn color="teal" dark>
                  Nestjs
                </v-btn>
                <v-btn color="primary" outlined>
                  Reactjs
                </v-btn>
                <v-btn color="primary">
                  Mysql
                </v-btn>
                <v-btn color="orange" dark>
                  typeorm
                </v-btn>
                <v-btn color="primary">
                  Material UI
                </v-btn>
              </v-card-actions>
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