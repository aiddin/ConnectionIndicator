<template>
<div>

    <table>
        <tr >
            <th class="status">Wifi</th>
            <th class="server">
              <h1>Server 1</h1>
              <a>nogf.asiabroker.com</a>
            </th>
            <th class="exchanges">SG-EQ</th>
        </tr>
        <tr  >
            <th class="status">Wifi</th>
            <th class="server">
              <h1>Server 2</h1>
              <a>nogf-kaprao.asiabroker.com</a>
            </th>
            <th class="exchanges">SG-EQ</th>
        </tr>
    </table>

</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* th, td{
  padding-bottom: 20px;
} */
tr{
  border-style: solid;
  border-bottom: 1px;
  
}

table {
  
    border-collapse: collapse;
    margin: auto;
    width: 1000px;
    border-style: solid;

}
.status{
  width:100px;
}
.server{
  text-align: left;
  width:300px;
  padding-bottom: 15px;
}
.exchanges{
  text-align: left;
}
</style>
