<template>
  <div class="navbar">
    <div class="navbar-end">
      
      <div
          class="buttons"     
      > 

        <router-link 
          class="button"
          to="/"
          v-if="curRoutePath != '/'"          
        >
          Go Home
        </router-link>        

        <template          
          v-if="auth"
        >
          <router-link 
            class="button"
            to="/posts/new"
          >
            New Post
          </router-link>

          <button
            class="button"
            @click="signOut"
          >
            Sign Out
          </button>
        </template>

        <template          
          v-else
        >
          <button
            class="button"
            data-test="sign-up"
            @click="signUp"
          >
            Sign Up
          </button>

          <button
            class="button"
            @click="signIn"
          >
            Sign In
          </button>
        </template>

      </div>

    </div>
  </div>

  <teleport to="#modal">
    <component :is="component" />
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, h, markRaw } from 'vue';
import { useRouter } from 'vue-router'
import Signup from './Signup.vue'
import Signin from './Signin.vue'
import { useModal } from '../useModal'
import { useStore } from '../store'

export default defineComponent({
  components: {
    Signup
  },

  setup() {
    const modal = useModal()
    const store = useStore()
    const router = useRouter()

    const curRoutePath = computed(() => {
      return router.currentRoute.value.path
    })    
    
    const auth = computed(() => {
      return !!store.getState().authors.currentUserId
    })

    const signIn = () => {
      modal.component.value = markRaw(Signin)
      modal.showModal()
    }

    const signUp = () => {
      modal.component.value = markRaw(Signup)
      modal.showModal()
    }

    const signOut = () => {
      store.signOut() 
      router.push('/')
    }

    return {
      component: modal.component,
      signIn,
      signUp,
      signOut,
      auth,      
      curRoutePath
    }
  }
});
</script>