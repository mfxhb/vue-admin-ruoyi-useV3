/*
 * @Author: BORING GHOST
 * @Date: 2022-09-16 08:54:49
 * @LastEditTime: 2022-09-16 11:02:25
 * @Description:
 */

export const table2Text = `
/* 单选某一行 */
highlight-current-row //开启高亮模式
@click="setCurrent(data[1])" // 事件触发时传入数据的某一行
const setCurrent = (row) => { // 方法中通过tableDom的setCurrentRow方法修改
  singleTableRef.value?.setCurrentRow(row);
};
/* 选中多行 */
添加一列 el-table-column type='selection' 即可
singleTableRef.value?.toggleRowSelection(row) // 再使用该方法将要选中的挨个加入
/* 排序 */
sortable
:sort-method="tableDateSort"
/* 格式化某一列的值 */
:formatter="formatter"
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.name + "-custom";
}
`;

export const table1Text = `
stripe='true' // 开启斑马纹
border='true' // 开启边框
:row-class-name="tableRowClassName" //自定义行类名
height="250" // 给height属性一个值能够固定表头
fixed="left" // 固定列
show-overflow-tooltip // 内容过长时显示的方式

const tableRowClassName = ({ rowIndex }) => {
  const className = rowIndex % 2 === 0 ? "warning-row" : "success-row";
  console.log(className);
  return className;
};

.el-table {
  :deep(.warning-row) {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  :deep(.success-row) {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
}
`;

export const table3Text = `
/* 筛选 */
:filters="data.map((v) => ({ text: v.date, value: v.date }))"// 筛选选项数据
:filter-method="filterHandler" // 筛选的方法
const filterHandler = (value, row, column) => {
  return row[column["property"]] === value;
};
`;

export const data = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address:
      "No. 189, Grove St, Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
];
