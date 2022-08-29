import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import SignUp from "./pages/Registration/SignUp.vue";
import Login from "./pages/Login/Login.vue";
import InventoryDetails from "./pages/InventoryDetails.vue";
import ManageItem from './pages/Inventory/ManageItem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/addItem", component: Home },
    { path: "/manageItem", component: ManageItem },
    { path: "/details/:id", component: InventoryDetails, props:true },
    { path: "/myItem", component: Home },
    { path: "/signup", component: SignUp },
    { path: "/login", component: Login },
  ],
});

export default router;
