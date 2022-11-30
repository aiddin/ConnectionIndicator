<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div>
<div>
    <div class="wifi-symbol">
        <div class="wifi-circle first"></div>
        <div class="wifi-circle second"></div>
        <div class="wifi-circle third"></div>
        <div class="wifi-circle fourth"></div>
    </div>    
</div>
<TcConnectionList />
</div>
</template>

<script>
import TcConnectionList from './TcConnectionList.vue'
export default {

    components: {
        TcConnectionList
    }
}
</script>

<style>

.wifi-symbol {
  /* border-style: solid;
  border-width: medium; */
    display: none;
}

.wifi-symbol {

    display: block;
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 150px;
    height: 150px;
    margin-top: -187.5px;
    -ms-transform: rotate(-45deg) translate(-100px);
    -moz-transform: rotate(-45deg) translate(-100px);
    -o-transform: rotate(-45deg) translate(-100px);
    -webkit-transform: rotate(-45deg) translate(-100px);
    transform: rotate(-45deg) translate(-100px);
}

.wifi-symbol .wifi-circle {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 21.42857px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-color: #00FF00;
    /* border-color:#FF0000;  */
    border-style: solid;
    border-width: 1em 1em 0 0;
    -webkit-border-radius: 0 100% 0 0;
    border-radius: 0 100% 0 0;
    opacity: 0;
    -o-animation: wifianimation 3s infinite;
    -moz-animation: wifianimation 3s infinite;
    -webkit-animation: wifianimation 3s infinite;
    animation: wifianimation 3s infinite;
}

.wifi-symbol .wifi-circle.first {
    -o-animation-delay: 800ms;
    -moz-animation-delay: 800ms;
    -webkit-animation-delay: 800ms;
    animation-delay: 800ms;

    /* opacity: 1;
   -o-animation: none;
  -moz-animation: none;
  -webkit-animation: none;
  animation: none;*/
}

.wifi-symbol .wifi-circle.second {
    width: 5em;
    height: 5em;
    -o-animation-delay: 400ms;
    -moz-animation-delay: 400ms;
    -webkit-animation-delay: 400ms;
    animation-delay: 400ms;

    /* opacity: 1;
   -o-animation: none;
  -moz-animation: none;
  -webkit-animation: none;
  animation: none; */
}

.wifi-symbol .wifi-circle.third {
    width: 3em;
    height: 3em;

    /* opacity: 1;
   -o-animation: none;
  -moz-animation: none;
  -webkit-animation: none;
  animation: none; */

}

.wifi-symbol .wifi-circle.fourth {
    width: 1em;
    height: 1em;
    opacity: 1;
    background-color: #00FF00;
    /* background-color:#FF0000;   */
    -o-animation: none;
    -moz-animation: none;
    -webkit-animation: none;
    animation: none;
}

@keyframes wifianimation {
    0% {
        opacity: 1;
    }

    5% {
        opactiy: 1;
    }

    6% {
        opactiy: 1;
    }

    100% {
        opactiy: 1;
    }
}

@-moz-keyframes wifianimation {
    0% {
        opacity: 1;
    }

    5% {
        opactiy: 1;
    }

    6% {
        opactiy: 1;
    }

    100% {
        opactiy: 1;
    }
}

@-webkit-keyframes wifianimation {
    0% {
        opacity: 1;
    }

    5% {
        opactiy: 1;
    }

    6% {
        opactiy: 1;
    }

    100% {
        opactiy: 1;
    }
}
</style>
