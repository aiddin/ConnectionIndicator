<template>
<div>

    <table>
     
        <tr  v-for="server in servers" v-bind:key="server.id">
            <th class="status"><TcIcon/>{{server.status}}</th>
            <th class="server">
              <h1>{{(server.type)}}</h1>
              <a>{{server.httpServer}}</a>
            </th>
            <th class="exchanges"><TcChipList v-bind:exchanges="server.supportExchanges"/></th>
        </tr>
        <!-- <tr  >
            <th class="status"><TcIcon/></th>
            <th class="server">
              <h1>Server 2</h1>
              <a>nogf-kaprao.asiabroker.com</a>
            </th>
            <th class="exchanges"><TcChipList/></th>
        </tr> -->
    </table>

</div>
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

tr{
  border-style: solid;
  border-bottom: 1px;
}
th{
  padding-right: 15px;
  padding-left: 15px;
}

table {
    border-collapse: collapse;
    margin: auto;
    width: 80%;
    border-style: solid;
}
.status{
  width:10%;
  padding-right: 5px;
  padding-left: 5px;
}
.server{
  text-align: left;
  width:30%;
  padding-bottom: 15px;
}
.exchanges{
  text-align: left;
}
</style>
