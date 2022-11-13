<template>
  <div class="todo-list">
    My Todo's
    <div class="mt-3">
      <div class="grid-layout">
        <TodoCard v-for="item of todos" :key="item.id" :todo="item" />
      </div>
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
  }
}
</script>
