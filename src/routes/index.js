import Mission from "~/page/Mission";
import RedeemedGifts from "~/page/RedeemedGifts";

const { default: Home } = require("~/page/Home");
const { default: Login } = require("~/page/Login");

const publicRoutes = [
  { path: "https://hoanghuydev.github.io/love-point/", component: Home },
  { path: "https://hoanghuydev.github.io/love-point/login", component: Login },
];
const privateRoutes = [
  { path: "/mission", component: Mission },
  { path: "/redeemed-gifts", component: RedeemedGifts },
];
export { publicRoutes, privateRoutes };
