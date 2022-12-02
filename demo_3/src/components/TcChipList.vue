<template>
<div>
    {{exchanges}}
    <chiplist :rounded='"small"' :fill-mode='"solid"' :default-data-items="types">

    </chiplist>
</div>
</template>

   
<script>
import {
    ChipList
} from '@progress/kendo-vue-buttons';
import '@progress/kendo-theme-default/dist/all.css';


export default {
    components: {
        'chiplist': ChipList,

    },
    props:['exchanges'],
    data() {
        return {
            types: [{
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

   
<style >

   </style>
