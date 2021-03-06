import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
      return {
        posts: [],
        user: {}
      }
    },
    mutations: {
      UPDATE_POSTS(state, posts) {
        console.log('mutations', posts)
        state.posts = posts.data
      },
      UPDATE_USER(state, user) {
        state.user = user
      }
    },
    actions: {
      updatePosts(context, posts) {
        console.log('actions', posts)
        context.commit('UPDATE_POSTS', posts)
      }
    },
    getters: {
      getPosts(state) {
        return state.posts
      },
      getUser(state) {
        return state.user
      }
    }
})

createApp(App).use(store).use(router).mount('#app')