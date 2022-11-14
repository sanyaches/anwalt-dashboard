<template>
  <div class="todo-list">
    <h3>My Todo's</h3>
    <div class="mt-3">
      <div v-if="loading">Loading ...</div>
      <div v-else-if="todos.length" class="grid-layout">
        <TodoCard v-for="item of todos" :key="item.id" :todo="item" />
      </div>
      <div v-else>No todo's found</div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Todo } from '@/types'
import type { PropType } from 'vue'
import TodoCard from './TodoCard.vue'

export default {
  name: 'TodoList',

  components: {
    TodoCard,
  },

  props: {
    todos: {
      required: true,
      type: Object as PropType<Array<Todo>>
    },
    loading: {
      required: true,
      type: Boolean
    }
  }
}
</script>
