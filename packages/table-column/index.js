export default {
  name: 'SelfTableColumn',
  props: {
    prop: String,
    label: String,
    width: [Number, String],
    ellipsis: Boolean,
    customCls: String,
    customStyle: [String, Function],
    meta: Object
  },
  render() {},
  created() {
    const store = this.$parent.store;
    const column = this.getColumn({
      prop: this.prop,
      label: this.label,
      width: this.width,
      ellipsis: this.ellipsis,
      customCls: this.customCls,
      customStyle: this.customStyle,
      meta: this.meta
    });
    store.states.columns.push(column);
  },
  methods: {
    getColumn(options) {
      const column = {};
      for (const key in options) {
        column[key] = options[key];
      }
      return column;
    }
  }
};
