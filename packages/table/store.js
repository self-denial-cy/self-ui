export default class Store {
  constructor(table) {
    if (!table) {
      throw new Error('Table component instance is required');
    }
    this.table = table;
    this.states = {
      columns: [],
      data: [],
      _data: []
    };
  }

  updateData(val) {
    this.states._data = [...val];
    this.states.data = [...val];
  }
}
