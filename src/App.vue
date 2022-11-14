<template>
  <div class="container py-4">
    <h1 class="pt-5 text-center mb-5">My Dashboard</h1>
    <PostList :posts="posts" :loading="loadingPosts" class="mb-5" />
    <TodoList :todos="todos" :loading="loadingTodos" />
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
    const loadingPosts = computed(() => appStore.loadingPosts)
    const loadingTodos = computed(() => appStore.loadingTodos)

    return {
      posts,
      todos,
      loadingPosts,
      loadingTodos,
    }
  }
})
</script>