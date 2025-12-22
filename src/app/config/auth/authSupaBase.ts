import { AuthProvider } from '@refinedev/core'
import { supabaseClient } from '../client'

const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        success: false,
        error: {
          name: 'Login Error',
          message: error.message,
        },
      }
    }

    if (data?.session) {
      return { success: true }
    }

    return { success: false }
  },

  register: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    })

    if (error) {
      return {
        success: false,
        error: {
          name: 'Register Error',
          message: error.message,
        },
      }
    }

    if (data) {
      return { success: true }
    }

    return { success: false }
  },

  logout: async () => {
    const { error } = await supabaseClient.auth.signOut()

    if (error) {
      return {
        success: false,
        error: {
          name: 'Logout Error',
          message: error.message,
        },
      }
    }

    return { success: true }
  },

  check: async () => {
    const { data } = await supabaseClient.auth.getSession()
    return {
      authenticated: !!data.session,
    }
  },

  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser()
    if (data.user) {
      return {
        ...data.user,
        name: data.user.email ?? 'Unknown',
      }
    }
    return null
  },
  onError: async (error) => {
    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
      }
    }
    return {}
  },
}

export default authProvider
