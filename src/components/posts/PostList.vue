<template>
  <div class="post-list">
    Latest posts
    <ul >
      <li v-for="post in posts" :key="post.id">
        <div>{{ post.id }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Post } from '@/types'
import type { PropType } from 'vue'

export default {
  name: 'PostList',

  props: {
    posts: {
      required: true,
      type: Object as PropType<Array<Post>>
    },
  }
}
</script>
