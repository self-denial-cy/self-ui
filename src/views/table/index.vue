<template>
  <div>
    <h3>表格</h3>
    <self-table :data="tableData1" stripe border shadow align="center" hover>
      <self-table-column prop="no" label="编号" width="100" ellipsis />
      <self-table-column prop="name" label="名称" width="100" ellipsis />
      <self-table-column prop="age" label="年龄" width="100" ellipsis />
      <self-table-column prop="skill" label="技能" width="100" ellipsis />
      <self-table-column prop="address" label="地址" width="100" ellipsis />
    </self-table>
    <h3>参数列表</h3>
    <prop-table :data="tableData2" caption="表格属性" />
    <prop-table :data="tableData3" caption="表格列属性" />
  </div>
</template>

<script>
import SelfTable from 'packages/table';
import SelfTableColumn from 'packages/table-column';
import PropTable from '@/components/prop-table';

export default {
  components: {
    SelfTable,
    SelfTableColumn,
    PropTable
  },
  data() {
    return {
      tableData1: [
        {
          no: '9527',
          name: '唐伯虎',
          age: '不详',
          skill: '点秋香',
          address: '桃花庵'
        },
        {
          no: '66266',
          name: '孙悟空',
          age: '不详',
          skill: '十倍界王拳',
          address: '界王界'
        },
        {
          no: '77577',
          name: '花木兰',
          age: '不详',
          skill: '绽放刀锋',
          address: '王者峡谷'
        },
        {
          no: '74568',
          name: '李存孝',
          age: '不详',
          skill: '十三太保',
          address: '唐末长安'
        },
        {
          no: '45632',
          name: '雨化田',
          age: '不详',
          skill: '皇权特许',
          address: '西厂厂花'
        }
      ],
      tableData2: [
        {
          param: 'data',
          desc: '指定表格数据源',
          type: 'Array',
          option: '-',
          default: '-'
        },
        {
          param: 'shadow',
          desc: '指定表格是否开启阴影效果',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData3: []
    };
  }
};
</script>
