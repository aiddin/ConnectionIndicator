<template>
<table class=" border-slate-400  w-full">

    <tr class=" border-collapse border border-slate-400 " v-for="server in servers" v-bind:key="server.id">
        <td class="px-2">
            <TcIcon v-bind:icon="server.status" />
        </td>
        <td class=" pl-1 text-left ">
            <h1 class="text-xl"><b>{{(server.type)}}</b></h1>
            <a class="text-sm ">{{server.httpServer}}</a>
        </td>
        <td class=" pl-1 pr-1 text-left ">
            <TcChipList v-bind:exchanges="server.supportExchanges" />
        </td>
    </tr>

</table>
</template>

<script>
import TcChipList from '../components/TcChipList.vue'
import TcIcon from '../components/TcIcon.vue'
export default {
    components: {
        TcChipList,
        TcIcon
    },
    props: [
        'servers'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
th {
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
}

</style>
