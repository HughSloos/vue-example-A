import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hello",
    component: HelloWorld
  },
  {
    path: "/1",
    name: "P1",
    component: Page1
  },
  {
    path: "/2",
    name: "P2",
    component: Page2
  },
  {
    path: "/3",
    name: "P3",
    component: Page3
  }
];

const router = new VueRouter({
  routes
});

export default router;
