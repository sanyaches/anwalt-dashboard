<template>
  <div class="post-list">
    <h3>Latest posts</h3>
    <div class="mt-3">
      <div class="grid-layout">
        <PostCard v-for="item of posts" :key="item.id" :post="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Post } from '@/types'
import type { PropType } from 'vue'
import PostCard from './PostCard.vue'

export default {
  name: 'PostList',

  components: {
    PostCard,
  },

  props: {
    posts: {
      required: true,
      type: Object as PropType<Array<Post>>
    },
  }
}
</script>
