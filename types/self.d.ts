import Vue from 'vue';
import { PluginObject } from 'vue';

interface ISelfGlobalOptions {
  [key: string]: any;
}

interface ISelf extends PluginObject<ISelfGlobalOptions> {
  version: string;
}

declare const Self: ISelf;

export default Self;

declare module 'vue/types/vue' {
  interface Vue {
    $Self: ISelfGlobalOptions;
  }
}