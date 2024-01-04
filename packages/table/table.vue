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
    </table>
  </div>
</template>

<script>
export default {
  name: 'SelfTable',
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
      default: 'left'
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
      default: 'top'
    },
    captionAlign: {
      type: String,
      default: 'center'
    },
    rowStyle: [String, Function],
    headStyle: String
  }
};
</script>
