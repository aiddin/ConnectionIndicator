<template><div>

<table class=" border-slate-400  w-full">

    <tr class=" border-collapse border border-slate-400 " v-for="server in servers" v-bind:key="server.id">
        <td class="px-2">
         <TcConnectionIndicator  v-bind:status="server.status"/>
        </td>
        <td class=" pl-1 text-left ">
            <h1 class="text-xl"><b>{{server.type}}</b></h1>
            <a class="text-sm ">{{server.httpServer}}</a>
        </td>
        <td class=" pl-1 pr-1 text-left " @dragover="allowDrop"> <!-- @dragover="allowDrop" -->
            <TcChipList v-bind:exchanges="server.supportExchanges" />
        </td>
    </tr>

</table></div>
</template>

<script>
import TcConnectionIndicator from '../components/TcConnectionIndicator.vue'

import TcChipList from '../components/TcChipList.vue'
export default {
    components: {
        TcChipList,TcConnectionIndicator
        
    },
    props: [
        'servers'
    ],
    data() {
        return {
            temp: []
        }
    },
    methods:{
        allowDrop(e) {
      e.preventDefault();

     

     
}
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>



</style>
