<template>
<div :style="blink">
 
    <FontAwesomeIcon :color='(color_icon)' icon="fa-solid fa-wifi" />
</div>
</template>

<script>
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faWifi
} from '@fortawesome/free-solid-svg-icons'
library.add(faWifi)

export default {
    name: 'App',
    components: {
        FontAwesomeIcon

    },
    props: [
        'status','servers'
    ],
    data() {
        return {

            temp: []

        }
    },
    created() {
        this.changeColor()
    },

    methods: {
        changeColor() {
            if (this.status != null) {
                if (this.status == 0) {
                    this.blink = {
                        animation: 'none'
                    }
                    this.color_icon = 'red'
                } else if (this.status == 1) {
                    this.blink = {

                        animation: "none"
                    }
                    this.color_icon = 'green'
                } else {
                    this.blink = {
                        animation: '0.5s linear infinite condemned_blink_effect'
                    }
                    this.color_icon = 'grey'
                }
            } else {
                
                this.condition = this.checkcondition()
                if (this.condition == false) {

                    this.color_icon = 'grey'
                    this.blink = {
                        animation: '0.5s linear infinite condemned_blink_effect'
                    }

                } else {
                    if (this.temp[0] == 0) {
                        this.color_icon = 'red'
                        this.blink = {
                            animation: "none"
                        }
                    }else if(this.temp[1]==1){
                        this.color_icon = 'green'
                        this.blink = {
                            animation: "none"
                        }
                    }else{
                        this.color_icon = 'grey'
                    this.blink = {
                        animation: '0.5s linear infinite condemned_blink_effect'
                    }
                    }
                        
                    

                }

            }

            // this.connection = checkcondition()
        },
        checkcondition() {
            for (this.i = 0; this.i < this.servers.length; this.i++) {
                this.temp.push(this.servers[this.i].status)
            }
            this.result = this.allEqual(this.temp)
            return this.result
        },
        allEqual(arr) {
            return new Set(arr).size == 1;
        }
    },

}
</script>

<style>
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
