<template>
    <t-button>登录</t-button>
    <div class=" flex items-center justify-center">{{ username }}</div>
</template>

<script setup lang="ts">
import userApi from '@/api/user'

const username = ref('测试文字')

userApi.login({
    username: 'admin',
    password: '123456'
}).then(res => {
    console.log(res)
})

</script>

<style scoped>

</style>