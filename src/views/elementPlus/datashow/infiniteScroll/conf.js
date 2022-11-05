/*
 * @Author: BORING GHOST
 * @Date: 2022-09-15 11:00:28
 * @LastEditTime: 2022-09-15 11:06:53
 * @Description:
 */
export const scroll1Text = `
// 父级必须要有overflow属性,子级必须要有高度
<ul
v-infinite-scroll="load"
class="infinite-list"
style="overflow: auto; height: 150px"
>
  <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
</ul>
`;

export const scroll2Text = `
<div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load2"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
        <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
</div>
`;
