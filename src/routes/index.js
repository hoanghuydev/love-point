import Mission from "~/page/Mission";
import RedeemedGifts from "~/page/RedeemedGifts";

const { default: Home } = require("~/page/Home");
const { default: Login } = require("~/page/Login");

const publicRoutes = [
  { path: "/love-point/", component: Home },
  { path: "/login", component: Login },
];
const privateRoutes = [
  { path: "/mission", component: Mission },
  { path: "/redeemed-gifts", component: RedeemedGifts },
];
export { publicRoutes, privateRoutes };
