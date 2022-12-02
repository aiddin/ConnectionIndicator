<template>


    <table class="w-4/5 table-auto  border-thin border-2 border-gray-600 m-auto">
     
        <tr  class="border-thin border-2 border-gray-600  " v-for="server in servers" v-bind:key="server.id">
            <th class=""><TcIcon  v-bind:icon="server.status"/></th>
            <th class=" text-left w-1/10 ">
              <h1 class="text-2xl">{{(server.type)}}</h1>
              <a class="text-sm ">{{server.httpServer}}</a>
            </th>
            <th class="text-left "><TcChipList v-bind:exchanges="server.supportExchanges"/></th>
        </tr>
        
    </table>


</template>

<script>
import TcChipList from '../components/TcChipList.vue'
import TcIcon from '../components/TcIcon.vue'
export default {
    components:{
      TcChipList,TcIcon
    },
    props:[
      'servers'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >


th{
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom:15px;
}





</style>
