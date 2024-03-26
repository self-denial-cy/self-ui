import { PluginObject } from 'vue';

interface ISelf extends PluginObject<any> {
  version: string;
}

declare const Self: ISelf;

export default Self;