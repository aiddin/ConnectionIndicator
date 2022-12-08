<template>
    <div class="blink">

   
   <FontAwesomeIcon color='red'  icon="fa-solid fa-wifi"/>
    </div>
</template>

  
<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
library.add(faWifi)


export default {
    name: 'App',
    components: {
        FontAwesomeIcon
      
    },
    data() {
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
                    status: 1
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
                    status: 2
                }
              
            ],
            
            

        }
    },
  

    methods: {
       
    },
   

}
</script>

  
<style>

.blink {
    
  animation: 0.5s linear infinite condemned_blink_effect;
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
</style>
