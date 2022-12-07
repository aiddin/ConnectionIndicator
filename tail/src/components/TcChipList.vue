<template>
<div>

    <chiplist :theme-color="'info'" :rounded='"large"' :fill-mode='"solid"' :default-data-items="types">

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
    props: ['exchanges'],
    data() {
        return {
            types: [],

        }
    },
    created() {
        this.test()
    },
    methods: {
        test() {
            for (let i = 0; i < this.exchanges.length; i++) {

                this.test = {
                    text: this.exchanges[i],
                }

                this.types.push(this.test);

            }
        }

    },
    updated() {
        this.types.length=0
        for (let i = 0; i < this.exchanges.length; i++) {

            this.test = {
                text: this.exchanges[i],
            }

            this.types.push(this.test);

        }
    }

}
</script>

   <!-- Add "scoped" attribute to limit CSS to this component only -->

<style >

   </style>
