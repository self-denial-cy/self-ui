<template>
  <div id="app">
    <self-button semantic="primary" shadow>Default</self-button>
    <self-button-group semantic="info" shadow radius="small" size="large">
      <self-button>1111</self-button>
      <self-button>2222</self-button>
      <self-button>3333</self-button>
      <self-button>4444</self-button>
    </self-button-group>
    <self-row>
      <self-col :span="6">1</self-col>
      <self-col :span="6">2</self-col>
      <self-col :span="6">3</self-col>
      <self-col :span="6">4</self-col>
    </self-row>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
