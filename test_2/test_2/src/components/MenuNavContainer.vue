<template>
    <kendo-menu :items="items" @select="onSelect" />
</template>
<script>
import { Menu } from "@progress/kendo-vue-layout";

export default {
    components: {
       'kendo-menu': Menu
    },
    data() {
      return {
        items: [
          {
            text: "Home",
            data: {
              path: "/"
            }
          }
          ,{
            text: "Chart",
            data: {
              path: "/Chart"
            }
          }
          ,{
            text: "Chart1",
            data: {
              path: "/Chart1"
            }
          }
          ,{
            text: "Form",
            data: {
              path: "/Form"
            }
          }
          ,{
            text: "Form1",
            data: {
              path: "/Form1"
            }
          }
          ,{
            text: "Grid",
            data: {
              path: "/Grid"
            }
          }
          ,{
            text: "Grid1",
            data: {
              path: "/Grid1"
            }
          }
        ]
      };
    },
    methods: {
      onSelect(e) {
        this.$router.push(e.item.data);
      }
    }
}
</script>
