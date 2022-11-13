<template>
  <div class="card post-card">
    {{ post.title }}
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from '@/types'

export default {
  props: {
    post: {
      required: true,
      type: Object as PropType<Post>
    }
  }
}
</script>
