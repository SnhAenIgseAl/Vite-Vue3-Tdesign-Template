<template>

    <div class="flex flex-col flex-center">
        <t-typography-title 
            v-for="(item, index) in 6" 
            :key="index"
            :level="`h${item}`"
        >
            H{{item}}. TDesign
        </t-typography-title>

        <div class="px-2 py-1 rounded-md text-zinc-50 bg-sky-500" >
            {{ username }}
        </div>
       
    </div>
    
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