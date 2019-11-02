import Vue from "vue";
import Config from "@/models/config.model";

declare module "vue/types/vue" {
  interface Vue {
    $config: Config;
  }
}
