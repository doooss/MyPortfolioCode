<template>
  <v-main>
    <div class="fit_container blue-grey lighten-3">
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-card>
              <v-card-title>
                저에 대해서 소개를 하는 페이지 입니다. 
              </v-card-title>
              <v-card-subtitle>
                이 페이지의 목적은 저의 장점과 단점을 보여드리는 페이지 입니다.
              </v-card-subtitle>
              <v-card-text>
                
              </v-card-text>
            </v-card>
          </v-col>
          <v-col></v-col>
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
                Learn more Easily 
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
                Focus on Basics
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
                First things First
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
                Open Mind
              </v-card-title>
              <v-card-text>
                편견에 얶매이지 않습니다. 자기 주관에 관해선 상당히 센편 입니다, 허나 그러한 생각들을 뒷받침하는 논리는 가지고 있습니다.
                상대방이 논리적으로 비판을 해온다면 잘 받아들입니다. 
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
  mounted(){
    this.$store.commit('changeTitle', 'About')    
  }
}
</script>