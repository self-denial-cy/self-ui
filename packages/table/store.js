export default class Store {
  constructor(table) {
    if (!table) {
      throw new Error('Table component instance is required');
    }
    this.table = table;
    this.states = {
      columns: [],
      data: [],
      _data: [] // 存放初始排序的数据源
    };
  }

  updateData(val) {
    this.states._data = [...val];
    this.states.data = [...val];
  }

  updateColumn(currentColumn, sort) {
    const states = this.states;
    // TODO 目前只支持单列排序，后续考虑迭代多列排序
    for (const column of states.columns) {
      if (column === currentColumn) {
        column.sort = sort;
      } else {
        column.sort = 'default';
      }
    }
  }

  sortData(column) {
    const states = this.states;
    const prop = column.prop;
    const sort = column.sort;

    if (sort === 'default') {
      states.data = [states._data];
    } else {
      states.data.sort((a, b) => {
        let prev = a[prop];
        let next = b[prop];

        if (!isNaN(Number(prev)) && !isNaN(Number(next))) {
          prev = Number(prev);
          next = Number(next);
        }

        if (prev > next) {
          return sort === 'asc' ? 1 : -1;
        } else if (prev < next) {
          return sort === 'asc' ? -1 : 1;
        }
        return 0;
      });
    }
  }
}
