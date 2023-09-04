import Mission from "~/page/Mission";
import RedeemedGifts from "~/page/RedeemedGifts";

const { default: Home } = require("~/page/Home");
const { default: Login } = require("~/page/Login");

const publicRoutes = [
  { path: "/love-point/", component: Home },
  { path: "/love-point/login", component: Login },
];
const privateRoutes = [
  { path: "/love-point/mission", component: Mission },
  { path: "/love-point/redeemed-gifts", component: RedeemedGifts },
];
export { publicRoutes, privateRoutes };
