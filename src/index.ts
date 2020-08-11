/**
 * This is your app main file
 *
 * Use it to do anything you want in your Factor app
 */
import { addFilter, setting, addRoutes } from "@factor/api";

addRoutes({
  key: "zenoRoutes",
  routes: [
    {
      path: "/",
      component: setting("home.component"),
      meta: { nav: true },
    },
    {
      path: "/about",
      component: (): Promise<any> => import("./v-about.vue"),
      meta: { nav: true },
    },
    {
      path: "/contact",
      component: (): Promise<any> => import("./v-contact.vue"),
      meta: { nav: true },
    },
    {
      path: "/pricing",
      component: (): Promise<any> => import("./v-pricing.vue"),
      meta: { nav: true },
    },
  ],
});
