<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    
    <div class="wifi-symbol">
        <div class="wifi-circle first"></div>
        <div class="wifi-circle second"></div>
        <div class="wifi-circle third"></div>
        <div class="wifi-circle fourth"></div>
    </div>

</template>

<script>

export default {

   
}
</script>

<style>

.wifi-symbol {
    
    position:absolute;
    right:85%;

   
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg) ;
    -webkit-transform: rotate(-45deg) ;
    transform: rotate(-45deg) ;
}

.wifi-symbol .wifi-circle {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    display: block;
   
    font-size:20%;
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
    width: 7em;
    height: 7em;
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
