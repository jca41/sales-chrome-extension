import type { ComponentType } from "svelte";
import type { TabHeading } from "../contracts/tab.types";
import Bookmarks from "../pages/bookmarks.svelte";
import Development from "../pages/development.svelte";
import Features from "../pages/features.svelte";
import Proxy from "../pages/proxy.svelte";
import Services from "../pages/services.svelte";
import Support from "../pages/support.svelte";

export const PAGES = [
  { id: "features", title: "Features", component: Features },
  { id: "bookmarks", title: "Bookmarks", component: Bookmarks },
  { id: "development", title: "Development", component: Development },
  { id: "support", title: "Support", component: Support },
  { id: "proxy", title: "Proxy", component: Proxy },
  { id: "services", title: "Services", component: Services },
] satisfies (TabHeading & { component: ComponentType })[];
