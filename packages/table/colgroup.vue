<template>
  <colgroup>
    <col v-for="(column, index) in store.states.columns" :key="index" :width="column.width" />
  </colgroup>
</template>

<script>
export default {
  name: 'SelfTableColgroup',
  data() {
    return {
      store: this.$parent.store
    };
  }
};
</script>
