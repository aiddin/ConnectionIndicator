<template>
<div>

    <table>
        <tr >
            <th class="status"><TcIcon/></th>
            <th class="server">
              <h1>Server 1</h1>
              <a>nogf.asiabroker.com</a>
            </th>
            <th class="exchanges"><TcChipList/></th>
        </tr>
        <tr  >
            <th class="status"><TcIcon/></th>
            <th class="server">
              <h1>Server 2</h1>
              <a>nogf-kaprao.asiabroker.com</a>
            </th>
            <th class="exchanges"><TcChipList/></th>
        </tr>
    </table>

</div>
</template>

<script>
import TcChipList from '../components/TcChipList.vue'
import TcIcon from '../components/TcIcon.vue'
export default {
    components:{
      TcChipList,TcIcon
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

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
