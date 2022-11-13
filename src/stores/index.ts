import { defineStore } from 'pinia'
import { apiService } from '@/api/apiService'
import type { Post, Todo, User } from '@/types'
 
type AppState = {
  user: User | null,
  posts: Post[],
  todos: Todo[],
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    user: null,
    posts: [],
    todos: [],
  }),

  actions: {
    initAppStore () {
      this.loadUser()
      this.loadPosts()
      this.loadTodos()
    },

    loadUser () {
      this.user = { userId: '4619' }
    },

    async loadPosts() {
      const posts = await apiService.request<Post[]>('posts')
      this.posts = posts
    },

    async loadTodos() {
      if (!this.user?.userId) {
        console.error('[Error] AppStore.loadTodos: userId is not defined')
        return
      }

      const todos = await apiService.request<Todo[]>(`users/${this.user.userId}/todos`)
      this.todos = todos
    },
  },
})