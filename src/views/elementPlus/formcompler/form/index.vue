<!--
 * @Author: BORING GHOST
 * @Date: 2022-09-05 14:58:58
 * @LastEditTime: 2022-09-08 09:09:53
 * @Description: 
-->
<template>
  <div>
    <!-- 普遍用法 -->
    <div>
      <div class="xlb-title-2">普通用法</div>
      <el-form mode="form" label-width="120px">
        <el-form-item label="姓名:">
          <el-input v-model="form.input" placeholder="请输入~"></el-input>
        </el-form-item>
        <el-form-item label="爱好:">
          <el-input v-model="form.hobby" placeholder="请输入~"></el-input>
        </el-form-item>
        <el-form-item label="选项:">
          <el-select v-model="form.select">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="12">
            <el-date-picker type="date" v-model="form.date" />
          </el-col>
          <el-col :span="12">
            <el-time-picker v-model="form.time"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="开关">
          <el-switch v-model="form.switch"></el-switch>
          <div class="xlb-title-null">{{ form.switch }}</div>
        </el-form-item>
        <el-form-item label="多选">
          <el-checkbox-group v-model="form.chckboxList">
            <el-checkbox border label="option1"></el-checkbox>
            <el-checkbox border label="option2"></el-checkbox>
            <el-checkbox border label="option3"></el-checkbox>
            <el-checkbox border label="option4"></el-checkbox>
            <el-checkbox border label="option5"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选">
          <el-radio-group v-model="form.radio">
            <el-radio border label="radio1"></el-radio>
            <el-radio border label="radio2"></el-radio>
            <el-radio border label="radio3"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="多行文本">
          <el-input type="textarea" v-model="form.textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 行内表單 -->
    <div>
      <div class="xlb-title-2">行内表單</div>
      <div class="xlb-title-3">给个label宽体验会更好!</div>
      <el-form :mode="form2" :inline="true" label-width="150px">
        <el-form-item label="Approved by">
          <el-input v-model="form2.input1"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="form2.input2"></el-input>
        </el-form-item>
        <el-form-item label="Hobby">
          <el-input v-model="form2.input3"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit!</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表单标签的位置 -->
    <div>
      <div class="xlb-title-2">更改表单标签的位置</div>
      <el-form :mode="form3" inline label-position="top">
        <el-form-item label="label1">
          <el-input v-model="form3.label1"></el-input>
        </el-form-item>
        <el-form-item label="label2">
          <el-input v-model="form3.label2"></el-input>
        </el-form-item>
        <el-form-item label="handle">
          <el-button @click="onSubmit" type="primary">Submit!</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表单校验 -->
    <div>
      <div class="xlb-title-2">表单验证规则rules</div>
      <el-form :mode="form4" :rules="formRules" inline label-position="top">
        <el-form-item label="label1" prop="input">
          <el-input v-model="form4.input"></el-input>
        </el-form-item>
        <el-form-item label="label2" prop="input2">
          <el-input v-model="form4.input2"></el-input>
        </el-form-item>
        <el-form-item label="handle">
          <el-button type="primary" @click="onSubmit">Submit ~</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 自定义校验规则 -->
    <div>
      <div class="xlb-title-2">自定义校验规则</div>
      <el-form inline :mode="form5" :rules="form5Rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form5.name"></el-input>
        </el-form-item>
        <el-form-item label="爱好">
          <el-select clearable v-model="form5.hobby">
            <el-option label="打篮球" value="lanqiu"></el-option>
            <el-option label="吃饭" value="each"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <!-- 添加删除表单项 -->
    <div>
      <div class="xlb-title-2">添加删除表单项</div>
      <el-scrollbar
        always
        wrap-style="border:1px solid gray;"
        max-height="100px"
      >
        <el-form :model="customForm" inline label-position="top">
          <el-col :span="12" :offset="12">
            <el-form-item label="handle">
              <el-button @click.prevent="customSbumit">submit!</el-button>
              <el-button @click="addFormItem">Add</el-button>
            </el-form-item>
          </el-col>
          <el-form-item label="姓名">
            <el-input v-model="customForm.name"></el-input>
          </el-form-item>
          <el-form-item
            v-for="(item, index) in customForm.extends"
            :label="item.key"
            :key="item.key"
            :prop="'extends.' + index + '.value'"
            :rules="[
              {
                required: true,
                message: '不能为空',
                trigger: 'blur',
              },
            ]"
          >
            <el-space fill wrap direction="vertical">
              <el-input v-model="item.value"></el-input>
              <el-button @click="delFormItem(item.key)">Del</el-button>
            </el-space>
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </div>
    <!-- 数字验证 -->
    <div>
      <div class="xlb-title-2">数字验证</div>
      <el-form
        ref="numberFormRef"
        inline
        label-position="top"
        :model="numberForm"
      >
        <el-form-item
          :rules="[
            {
              required: true,
              message: '数字必须填写',
              trigger: 'blur',
            },
            {
              type: 'number',
              message: '填写的不是数字类型',
              trigger: 'blur',
            },
          ]"
          prop="input"
          label="number"
        >
          <el-input v-model.number="numberForm.input"></el-input>
        </el-form-item>
        <el-form-item label="Handle">
          <el-button type="primary" @click="numberFormSubmit(numberFormRef)">
            submit
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 尺寸控制 -->
    <div>
      <div class="xlb-title-2">尺寸控制</div>
      <el-space>
        <el-radio-group v-model="size">
          <el-radio-button label="large"></el-radio-button>
          <el-radio-button label="default"></el-radio-button>
          <el-radio-button label="small"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="labelPosition">
          <el-radio-button label="left">Left</el-radio-button>
          <el-radio-button label="right">Right</el-radio-button>
          <el-radio-button label="top">Top</el-radio-button>
        </el-radio-group>
      </el-space>
      <div class="xlb-space-h"></div>
      <div style="min-height: 394px" class="xlb-box-border">
        <!-- FIX :labelWidth为auto时会爆出警告 -->
        <el-form
          :label-width="labelWidth"
          :model="sizeForm"
          :size="size"
          :label-position="labelPosition"
        >
          <el-form-item label="Activity name">
            <el-input v-model="sizeForm.input"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="sizeForm.select">
              <el-option label="Zone one" value="ZoneOne"></el-option>
              <el-option label="Zone two" value="ZoneTwo"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-space alignment="center">
              <el-date-picker
                class="xlb-col-box"
                v-model="sizeForm.date"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
              ></el-date-picker>
              <div class="xlb-col-box">-</div>
              <el-time-picker
                class="xlb-col-box"
                v-model="sizeForm.time"
              ></el-time-picker>
            </el-space>
          </el-form-item>
          <el-form-item label="Activity type">
            <el-radio-group v-model="sizeForm.radio">
              <el-radio-button label="Online">
                Online activities
              </el-radio-button>
              <el-radio-button label="Promotion">
                Promotion activities
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="sizeForm.radio2">
              <el-radio border label="Sponsor" />
              <el-radio border label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script name="FormElement" setup>
const requiredRule = (rule, value, callback) => {
  if (!value) {
    callback(new Error("不能为空"));
  } else {
    callback();
  }
};

// data
const size = ref("small");
const labelWidth = computed(() => {
  const widths = {
    small: "95px",
    default: "105px",
    large: "105px",
  };
  return widths[size.value] || "100px";
});
const labelPosition = ref("left");
const sizeForm = reactive({});
const numberFormRef = ref();
const numberForm = reactive({
  input: "",
});
const customForm = reactive({
  name: "",
  extends: [
    {
      key: "age",
      value: "",
    },
    {
      key: "hobby",
      value: "",
    },
  ],
});
const form5Rules = reactive({
  name: [
    {
      validator: requiredRule,
      trigger: "blur",
    },
  ],
});
const form5 = reactive({
  name: "",
  hobby: "",
});
const formRules = reactive({
  input: [
    {
      required: true,
      message: "这项是必须填写的~",
      trigger: "blur",
    },
  ],
  input2: [
    {
      required: true,
      message: "input2是必填项~",
      trigger: "blur",
    },
  ],
});
const form4 = reactive({
  input: "",
  input2: "",
});
const form3 = reactive({
  label1: "",
  label2: "",
});
const form2 = reactive({
  input1: "",
  input2: "",
  input3: "",
});
const form = reactive({
  textarea: "",
  input: "",
  hobby: "",
  select: "",
  date: "",
  time: "",
  switch: false,
  chckboxList: [],
  radio: "",
});
// methods
const numberFormSubmit = (el) => {
  el.validate((valid) => {
    if (valid) {
      console.log("校验通过");
    } else {
      console.log("校验失败");
    }
  });
};
const addFormItem = () => {
  customForm.extends.push({
    key: "custom" + Date.now(),
    value: "",
  });
};
const delFormItem = (id) => {
  const index = customForm.extends.findIndex((v) => v.key === id);
  if (index !== -1) {
    customForm.extends.splice(index, 1);
  }
};
const onSubmit = () => {
  console.log(form);
  console.log("submit !");
};
const customSbumit = () => {
  console.log(customForm);
};
</script>

<style lang="scss" scoped></style>
