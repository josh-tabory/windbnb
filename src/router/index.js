import Vue from "vue";
import VueRouter from "vue-router";
import StayList from "../views/StayList.vue";
import StayDetails from "../views/StayDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StayList",
    component: StayList,
  },
  {
    path: "/stay/:id",
    name: "StayDetails",
    props: true,
    component: StayDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
