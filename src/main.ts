import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import SvgIcon from "@jamescoyle/vue-icon"
import LinkItem from "./components/LinkItem/index.vue"

createApp(App)
  .component("SvgIcon", SvgIcon)
  .component("LinkItem", LinkItem)
  .mount("#app")
