<template>
<chiplist
        :rounded="'small'"
        :default-data-items="types">
       
      </chiplist>
</template>

<script>
import { ChipList } from '@progress/kendo-vue-buttons';
import '@progress/kendo-theme-default/dist/all.css';


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
            
        };
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
