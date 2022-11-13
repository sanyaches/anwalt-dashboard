<template>
  <div class="container">
    <h1 class="pt-5 text-center">My Dashboard</h1>
    <PostList :posts="posts" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue';
import { useAppStore } from '@/stores'
import PostList from './components/posts/PostList.vue'
import TodoList from './components/todos/TodoList.vue'

export default defineComponent({
  name: 'App',

  components: {
    PostList,
    TodoList,
  },

  setup() {
    const appStore = useAppStore();
    const posts = computed(() => appStore.posts)
    const todos = computed(() => appStore.todos)

    return {
      posts,
      todos,
    }
  }
})
</script>