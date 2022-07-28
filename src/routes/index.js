import { Home, Upload, Live, Search, Profile, Following } from "~/pages";

const publishRoutes = [
  {
    path: "/",
    page: Home,
    layout: "default",
  },
  {
    path: "/upload",
    page: Upload,
    layout: "headerOnly",
  },
  {
    path: "/live",
    page: Live,
  },
  {
    path: "/search",
    page: Search,
    layout: "default",
  },
  {
    path: "/profile",
    page: Profile,
    layout: "default",
  },
  {
    path: "/following",
    page: Following,
    layout: "headerOnly",
  },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
