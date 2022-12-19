<template>
  <div>
    <TcConnectionIndicator  v-bind:servers="servers" />
    <div>
  <TcConnectionList v-bind:servers="servers" />
</div>
  
</div>
</template>

<script>
import TcConnectionList from './components/TcConnectionList.vue'
import TcConnectionIndicator from './components/TcConnectionIndicator.vue'
export default {
  name: 'App',
  components: {
    TcConnectionList,TcConnectionIndicator
  },
  
  data(){
        return {
            
           
            servers: [{
                    type: "kaprao",
                    httpServer: "https://kaprao-dev.asiaebroker.com",
                    websocketServer: "ws://45.112.197.233:29999/ws-api/v1",
                    supportExchanges: [
                        "KL"
                    ],
                    status: 0
                },
                {
                    type: "njqc",
                    httpServer: "https://nginx-uat.asiaebroker.com/ath/njqc",
                    websocketServer: null,
                    supportExchanges: [
                        "MY",
                        "SG",
                        "HK"
                    ],
                    status: 2
                },
                {
                    type: "mock",
                    httpServer: "mock/market.json",
                    websocketServer: null,
                    supportExchanges: [
                        "O",
                        "A",
                        "N"
                    ],
                    status: 1
                }
              
            ],
            
            

        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
