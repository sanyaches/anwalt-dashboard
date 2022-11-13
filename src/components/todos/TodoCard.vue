<template>
  <div class="card todo-card">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :value="todo.id" :id="`checkbox_${todo.id}`" :checked="checked">
      <label class="form-check-label" :for="`checkbox_${todo.id}`">
        {{ todo.title }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { TodoStatus } from '@/types'
import type { Todo } from '@/types'

export default {
  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>
    }
  },

  setup(props: {todo: Todo}) {
    const checked = computed(() => {
      return props.todo.status === TodoStatus.completed
    })

    return {
      checked
    }
  }
}
</script>
