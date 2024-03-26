import { PluginObject } from 'vue';

interface Self extends PluginObject<any> {
  version: string;
}

declare const self: Self;

export default self;