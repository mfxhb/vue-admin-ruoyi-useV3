export const collapse1Text = `
<el-collapse v-model="inputs.collapse1">
  <el-collapse-item title="Title1" name="1">
    <div class="xlb-title-3">item1</div>
  </el-collapse-item>
  <el-collapse-item title="Title2" name="2">
    <div class="xlb-title-3">item2</div>
  </el-collapse-item>
  <el-collapse-item title="Title3" name="3">
    <div class="xlb-title-3">item3</div>
  </el-collapse-item>
</el-collapse>
`;

export const collapse2Text = `
<el-collapse accordion v-model="inputs.collapse2">
  <el-collapse-item title="Title1" name="1">
    <div class="xlb-title-3">item1</div>
  </el-collapse-item>
  <el-collapse-item title="Title2" name="2">
    <div class="xlb-title-3">item2</div>
  </el-collapse-item>
  <el-collapse-item title="Title3" name="3">
    <div class="xlb-title-3">item3</div>
  </el-collapse-item>
</el-collapse>
`;

export const collapse3Text = `
<el-collapse accordion v-model="inputs.collapse3">
    <el-collapse-item name="1">
      <template #title>
        Consistency<el-icon class="header-icon">
          <info-filled />
        </el-icon>
      </template>
      <div class="xlb-title-3">item1</div>
    </el-collapse-item>
    <el-collapse-item title="Title2" name="2">
      <div class="xlb-title-3">item2</div>
    </el-collapse-item>
    <el-collapse-item title="Title3" name="3">
      <div class="xlb-title-3">item3</div>
    </el-collapse-item>
</el-collapse>
`;
