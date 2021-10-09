<template>
  <v-main>
    <transition name="fadeOut">
      <div class="skills_container blue-grey lighten-4" v-if="alertBox">
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <v-card flat outlined dark width="600px" color="error">
              <v-card-title>
                <v-icon>
                  mdi-alert
                </v-icon>

                주의사항
              </v-card-title>
              <v-card-text>
                이 페이지는 실전 프로젝트 경험이 부족한 제가 할 수 있는 작업이 무엇인지 기술한 페이지 입니다. <br/>
                최대한 어필하기 위해 굳이 구체적으로 적은 것이니 좋게 봐주시길 바랍니다. <br/>              
                이 창은 {{count}} 초 이후에 사라집니다.
              </v-card-text>
              <v-card-actions @click="closeAlertBox()" >
                <v-btn  text >
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </div>
    </transition>
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
            </v-card>
           
          </v-col>
          <v-col>

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
      alertBox : true
    }
  },
  mounted(){
    setInterval(()=>{
      this.count--;
      if(this.count ==0){
      this.alertBox = false
    }
    }, 1000)
  },
  methods:{
    closeAlertBox(){
      this.alertBox = false
    }
  }
}
</script>

<style>

</style>