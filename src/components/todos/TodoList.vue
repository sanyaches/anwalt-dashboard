<template>
  <div class="todo-list">
    My Todo's
    <ul >
      <li v-for="todo in todos" :key="todo.id">
        <div>{{ todo.id }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Todo } from '@/types'
import type { PropType } from 'vue'

export default {
  name: 'TodoList',

  props: {
    todos: {
      required: true,
      type: Object as PropType<Array<Todo>>
    },
  }
}
</script>
