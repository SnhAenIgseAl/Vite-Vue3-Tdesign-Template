import { ref } from 'vue'
import { defineStore } from 'pinia'



export const useUserStore = defineStore('user', () => {

    const userToken = ref<string>('')

    const userInfo = ref()

    return {
        userToken,
        userInfo
    }
}, {
    persist: true
})