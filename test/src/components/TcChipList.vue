<template>
<div>
    <v-chip-group selected-class="text-primary" column>
        <v-chip draggable  @dragover="allowDrop" @dragstart="draggedData=exchange" @drop="onDrop(exchange)" v-for="exchange in exchanges" :key="exchange">
            {{ exchange }}
        </v-chip>
    </v-chip-group>
    {{temp}}
</div>
</template>

<script>
export default {
    props: [
        'exchanges'
    ],
    data() {
        return {
            chip: 'test',
            temp: []
        }
    }, 
    methods: {
        onDrop() {
            this.temp.push( this.draggedData);
        },
        allowDrop(e) {
            e.preventDefault();
        }
    },
}
</script>