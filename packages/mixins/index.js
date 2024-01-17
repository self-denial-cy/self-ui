export const dispatch = {
  methods: {
    dispatch(parentName, eventName, value) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== parentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit(eventName, value);
      }
    }
  }
};
