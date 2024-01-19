<template>
  <div class="self-table-responsive">
    <table
      ref="table"
      class="self-table"
      :class="[
        shadow ? 'self-table-shadow' : '',
        align ? `self-table-align-${align}` : '',
        hover ? 'self-table-hover' : '',
        stripe ? 'self-table-stripe' : '',
        border ? 'self-table-border' : '',
        grid ? 'self-table-grid' : ''
      ]"
      cellpadding="0"
      border="0"
    >
      <caption
        v-if="caption"
        :class="[
          captionSide ? `self-caption-side-${captionSide}` : '',
          captionAlign ? `self-caption-align-${captionAlign}` : ''
        ]"
      >
        <span>{{ caption }}</span>
      </caption>
      <slot></slot>
      <self-table-colgroup />
      <self-table-header :head-cls="headCls" />
      <self-table-body :row-style="rowStyle" />
    </table>
  </div>
</template>

<script>
import Store from './store';
import SelfTableColgroup from './colgroup.vue';
import SelfTableHeader from './header.vue';
import SelfTableBody from './body.vue';

export default {
  name: 'SelfTable',
  components: { SelfTableColgroup, SelfTableHeader, SelfTableBody },
  props: {
    data: {
      type: Array,
      required: true
    },
    shadow: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left',
      validator(val) {
        return ['left', 'right', 'center'].includes(val);
      }
    },
    hover: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String,
      default: ''
    },
    captionSide: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom'].includes(val);
      }
    },
    captionAlign: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'right', 'center'].includes(val);
      }
    },
    rowStyle: [String, Function],
    headCls: String
  },
  data() {
    const store = new Store(this);
    return {
      store
    };
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        this.store.updateData(val);
      }
    }
  }
};
</script>
