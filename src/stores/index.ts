import { defineStore } from 'pinia'
import { apiService } from '@/api/apiService'
import type { Post, Todo, User } from '@/types'
 
type AppState = {
  user: User | null,
  posts: Post[],
  todos: Todo[],
  loadingTodos: boolean,
  loadingPosts: boolean,
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    user: null,
    posts: [],
    todos: [],
    loadingTodos: false,
    loadingPosts: false,
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
      try {
        this.loadingPosts = true
        const posts = await apiService.request<Post[]>('posts')
        this.posts = posts
      } finally {
        this.loadingPosts = false
      }
    },

    async loadTodos() {
      try {
        this.loadingTodos = true
        // No results for special userId, show all
        const todos = await apiService.request<Todo[]>('todos')
        this.todos = todos
      } finally {
        this.loadingTodos = false
      }
    },
  },
})