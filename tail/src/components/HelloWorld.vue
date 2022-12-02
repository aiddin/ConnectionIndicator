<template>
  <div>
  
      <table class="w-4/5 table-auto  border-thin border-2 border-gray-600 m-auto">
       <tbody>
          <tr class="border-thin border-2 border-gray-600 text-left">
              <th class="px-5">WIFI</th>
              <th >
                <h1>SERVER</h1>
                <a>https.com</a>
              </th>
              <th >CHIPS</th>
          </tr>
          <tr   class="border-thin border-2 border-gray-600 text-left">
              <th class="px-5">Wifi</th>
              <th>
                <h1>Server 2</h1>
                <a>nogf-kaprao.asiabroker.com</a>
              </th>
              <th >Chip</th>
          </tr>
        </tbody>
      </table>
  
  </div>
  </template>
  
  <script>
  // import TcChipList from '../components/TcChipList.vue'
  // import TcIcon from '../components/TcIcon.vue'
  export default {
      components:{
        // TcChipList,TcIcon
      },
      props:[
        'servers'
      ]
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  
  <style >
  
 
  </style>
  