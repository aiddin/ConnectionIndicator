import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";

import Chart from "../components/Chart";

import Chart1 from "../components/Chart1";

import Form from "../components/Form";

import Form1 from "../components/Form1";

import Grid from "../components/Grid";

import Grid1 from "../components/Grid1";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
  ,{
    path: "/Chart",
    name: "Chart",
    component: Chart
  }
  ,{
    path: "/Chart1",
    name: "Chart1",
    component: Chart1
  }
  ,{
    path: "/Form",
    name: "Form",
    component: Form
  }
  ,{
    path: "/Form1",
    name: "Form1",
    component: Form1
  }
  ,{
    path: "/Grid",
    name: "Grid",
    component: Grid
  }
  ,{
    path: "/Grid1",
    name: "Grid1",
    component: Grid1
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
