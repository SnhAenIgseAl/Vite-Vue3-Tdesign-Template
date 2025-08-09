<template>
    <t-typography-title 
        v-for="(item, index) in 6" 
        :key="index"
        :level="`h${item}`">
        H{{item}}. TDesign
    </t-typography-title>
</template>

<script setup lang="ts">
import userApi from '@/api/user'

userApi.login({
    username: 'admin',
    password: '123456'
}).then(res => {
    console.log(res)
})

</script>

<style scoped>

</style>