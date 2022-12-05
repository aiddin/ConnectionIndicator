<template>
<div>
    <div>
        <svg @click="toggleDialog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" m-auto w-20 h-20 border-2 ">
            <path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
        <window v-if="visible" :title="'Resize me'" :resizable=true @close="toggleDialog">
            <span v-if="isResizable">
                I can be resized!
            </span>
            <span v-else>
                I cannot be resized!
            </span>
        </window>
    </div>
</div>
</template>

<script>
import {
    Window
} from '@progress/kendo-vue-dialogs';
export default {
    components: {
        'window': Window,

    },
    data() {
        return {
            visible: true,

        }
    },
    methods: {
        toggleDialog() {
            this.visible = !this.visible;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
