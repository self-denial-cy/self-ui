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
        },
        {
          param: 'align',
          desc: '指定表格排列方式',
          type: 'String',
          option: 'left | right | center',
          default: 'left'
        },
        {
          param: 'hover',
          desc: '指定表格是否开启鼠标悬停阴影效果',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'stripe',
          desc: '指定表格是否开启斑马纹效果',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'border',
          desc: '指定表格是否开启外边框',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'grid',
          desc: '指定表格是否开启内边框',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'caption',
          desc: '指定表格标题',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'caption-side',
          desc: '指定表格标题纵向排列方式',
          type: 'String',
          option: 'top | bottom',
          default: 'top'
        },
        {
          param: 'caption-align',
          desc: '指定表格标题横向排列方式',
          type: 'String',
          option: 'left | right | center',
          default: 'center'
        },
        {
          param: 'row-style',
          desc: '指定表格行样式，Function 接收【行数据，行索引】作为参数，需返回样式对象',
          type: 'String | Function',
          option: '-',
          default: '-'
        },
        {
          param: 'row-cls',
          desc: '指定表格行的类名称',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'head-cls',
          desc: '指定表格头的类名称',
          type: 'String',
          option: '-',
          default: '-'
        }
      ],
      tableData3: [
        {
          param: 'prop',
          desc: '指定表格列属性',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'label',
          desc: '指定表格列描述',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'width',
          desc: '指定表格列宽度',
          type: 'Number | String',
          option: '-',
          default: '-'
        },
        {
          param: 'ellipsis',
          desc: '指定表格列是否开启超出内容以省略号形式显示',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'custom-cls',
          desc: '指定表格列的类名称',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'custom-style',
          desc: '指定表格列样式，Function 接收【行数据，行索引，列数据，列索引】作为参数，需返回样式对象',
          type: 'String | Function',
          option: '-',
          default: '-'
        },
        {
          param: 'meta',
          desc: '指定表格列的元信息【动态列场景下，配合 customStyle 可自定义样式】',
          type: 'Object',
          option: '-',
          default: '-'
        }
      ]
    };
  }
};
</script>
