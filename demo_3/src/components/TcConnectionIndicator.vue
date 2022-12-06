<template>
<div style="color:green">

    <svg @click="toggleDialog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" m-auto h-20  border-2 ">
        <path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
    </svg>
    <window v-if="visible" :initial-width="400" :title="'Connection Server'" :resizable=true @close="toggleDialog" :color=blue>
        <TcConnectionList v-bind:servers="servers" />
    </window>
</div>
</template>

  
<script>
import TcConnectionList from '../components/TcConnectionList.vue'
import {
    Window
} from '@progress/kendo-vue-dialogs';
export default {
    name: 'App',
    components: {
        TcConnectionList,
        'window': Window,
    },
    data() {
        return {
            
            counter: 0,
            visible: false,
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
                    status: 0
                },
              
            ],
            
            servers_1: [{
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
            servers_2: [{
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
                        "N",
                        "T"
                    ],
                    status: 1
                }

            ],

        }
    },
    created() {
        this.display()
    },

    methods: {
        toggleDialog() {
            this.visible = !this.visible;
        },
        display() {

            setInterval(this.changedata, 3000)

        },
        changedata() {
            if (this.counter == 2) {
                this.counter = 0
            }
            this.counter = this.counter + 1
            if (this.counter == 1) {
                this.servers = this.servers_1
            } else {
                this.servers = this.servers_2
            }
        }
    },
    mounted() {

    }

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
