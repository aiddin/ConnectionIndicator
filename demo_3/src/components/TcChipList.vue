<template>
    <div >
   <chiplist 
           
           :rounded='"small"'
           :theme-color="'warning'" 
           :fill-mode='"solid"'
           :default-data-items="types"
         
           >
           
         </chiplist>
       </div> 
   </template>
   
   <script>
   import { ChipList } from '@progress/kendo-vue-buttons';
   import '@progress/kendo-theme-default/dist/all.css';
   const colorMap = {
       '1': '#B4E5F4',
   }
   
   export default {
       components: {
           'chiplist': ChipList,
           
       },
       data () {
           return {
               types:  [
       {
           text: 'MY-EQ',
       },
       {
         text: 'MY-DV',
           
       },
       {
         text: 'SG-EQ',
       },
       {
         text: 'ID-EQ',
       },
       {
         text: 'PH-EQ',
       }
   ],
       colorMap:colorMap
               
           };
       },
   
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   
   <style scoped>
   
   </style>
   