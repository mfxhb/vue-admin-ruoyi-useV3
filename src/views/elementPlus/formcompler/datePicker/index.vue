<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-05 10:14:24
 * @LastEditTime: 2022-09-05 14:23:49
 * @Description: 
-->
<template>
  <div>
    <!-- 左侧快捷选项 跟 禁用选项 -->
    <div>
      <div class="xlb-title-2">左侧快捷选项 跟 禁用选项</div>
      <el-date-picker
        v-model="vDatePicker"
        type="date"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        placeholder="Pick a day ~"
      />
    </div>
    <!-- 不同大小 -->
    <div>
      <div class="xlb-title-2">不同尺寸大小</div>
      <el-date-picker
        v-for="item in noSamesize"
        :key="item"
        :size="item"
        style="margin-right: 20px"
        v-model="vDatePicker"
        type="date"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        placeholder="Pick a day ~"
      />
    </div>
    <!-- 周,月,年,多个日期 -->
    <div>
      <div class="xlb-title-2">周,月,年,多个日期</div>
      <el-date-picker
        type="week"
        v-model="vweek"
        placeholder="请选择周 ~"
        format="[Week] ww"
      />
      <el-date-picker type="month" placeholder="请选择月 ~" v-model="vmonth" />
      <el-date-picker type="year" placeholder="请选择年 ~" v-model="vyear" />
      <el-date-picker
        type="dates"
        placeholder="可选择多个日期"
        v-model="vdates"
      />
    </div>
    <!-- 选择一段时间 -->
    <div>
      <div class="xlb-title-2">选择一段时间</div>
      <el-date-picker
        type="daterange"
        v-model="vrange"
        range-separator="至"
        start-placeholder="Start date"
        end-placeholder="End date"
        @change="dateChangeEvent"
      />
      <div class="xlb-title-3">取消2个面板的联动unlink-panels</div>
      <el-date-picker
        type="daterange"
        v-model="vrange"
        unlink-panels
        range-separator="至"
        start-placeholder="Start date"
        end-placeholder="End date"
        @change="dateChangeEvent"
      />
    </div>
    <!-- 选择月份 -->
    <div>
      <div class="xlb-title-2">选择月份范围,并且取消联动</div>
      <el-date-picker
        type="monthrange"
        v-model="vrange2"
        unlink-panels
      ></el-date-picker>
    </div>
    <!-- 默认值 -->
    <div>
      <div class="xlb-title-2">设置默认值</div>
      <el-button type="text" @click="readDefaultDate">查看时间值</el-button>
      <el-date-picker
        v-model="vdefault"
        type="date"
        placeholder="请选择时间 ~"
      />
      <div class="xlb-title-3">范围选择器默认值</div>
      <el-button type="text" @click="readDefaultRange">查看时间值</el-button>
      <el-date-picker type="daterange" v-model="vDefaultRange" />
    </div>
    <!-- 日期格式 -->
    <div>
      <div class="xlb-title-2">日期格式</div>
      <div class="xlb-title-null">{{ vformat }}</div>
      <el-date-picker
        v-model="vformat"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
        type="date"
      />
    </div>
    <!-- 前缀 -->
    <div>
      <div class="xlb-title-2">前缀内容</div>
      <el-date-picker
        v-model="vpreffix"
        type="date"
        placeholder="Pick a day"
        prefix-icon="Aim"
      />
    </div>
    <!-- 自定义内容 -->
    <div>
      <div class="xlb-title-2">自定义内容</div>
      <el-date-picker v-model="vcustom" type="date">
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
          </div>
        </template>
      </el-date-picker>
    </div>
  </div>
</template>

<script name="DatePickerElement" setup>
// data
const vcustom = ref("");
const vpreffix = ref("");
const vformat = ref(new Date(2010, 9, 1));
const vDefaultRange = ref([new Date(2010, 9, 1), new Date(2010, 10, 1)]);
const vdefault = ref(new Date(2010, 9, 1));
const vrange = ref("");
const vrange2 = ref("");
const vdates = ref("");
const vyear = ref("");
const vmonth = ref("");
const vweek = ref("");
const vDatePicker = ref("");
const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
const noSamesize = ["large", "default", "small"];

// methods
const readDefaultDate = () => {
  alert(vdefault.value);
};
const readDefaultRange = () => {
  alert(vDefaultRange.value);
};
const disabledDate = (time) => {
  return time.getTime() > Date.now();
};
const dateChangeEvent = () => {
  console.log(vrange.value);
};
</script>

<style lang="scss" scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
</style>
