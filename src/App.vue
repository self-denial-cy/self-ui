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
    <div style="height: 16px"></div>
    <self-table :data="tableData" shadow align="left" hover stripe grid>
      <self-table-column prop="name" label="姓名" width="25" />
      <self-table-column prop="age" label="年龄" width="25" />
      <self-table-column prop="address" label="地址" width="25" ellipsis />
      <self-table-column prop="remark" label="备注" width="25" />
    </self-table>
    <self-icon type="indent" size="24" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tableData: [
        {
          name: '张三',
          age: 24,
          address: '江苏省苏州市吴中区郭巷街道',
          remark: 'this is zhangsan'
        },
        {
          name: '张三',
          age: 24,
          address: '江苏省苏州市吴中区郭巷街道',
          remark: 'this is zhangsan'
        },
        {
          name: '张三',
          age: 24,
          address: '江苏省苏州市吴中区郭巷街道江苏省苏州市吴中区郭巷街道江苏省苏州市吴中区郭巷街道',
          remark: 'this is zhangsan'
        },
        {
          name: '张三',
          age: 24,
          address: '江苏省苏州市吴中区郭巷街道',
          remark: 'this is zhangsan'
        },
        {
          name: '张三',
          age: 24,
          address: '江苏省苏州市吴中区郭巷街道',
          remark: 'this is zhangsan'
        }
      ]
    };
  }
};
</script>
