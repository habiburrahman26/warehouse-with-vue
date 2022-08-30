import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("./pages/Home/Home.vue");
const SignUp = import("./pages/Registration/SignUp.vue");
const Login = import("./pages/Login/Login.vue");
const InventoryDetails = import("./pages/InventoryDetails.vue");
const ManageItem = import("./pages/Inventory/ManageItem.vue");

function redirectToLogin(_, _2, next) {
  const token = localStorage.getItem("token");
  if (token) {
    next();
  } else {
    next({ path: "/login" });
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/addItem", component: Home },
    {
      path: "/manageItem",
      component: ManageItem,
      beforeEnter: redirectToLogin,
    },
    {
      path: "/details/:id",
      component: InventoryDetails,
      props: true,
      beforeEnter: redirectToLogin,
    },
    { path: "/myItem", component: Home },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
  ],
  linkActiveClass: "active",
});

export default router;
