<template>
    <!-- <t-button>确定</t-button> -->
    <t-typography-title 
        v-for="(item, index) in 6" 
        :key="index"
        :level="`h${item}`">
        H{{item}}. TDesign
    </t-typography-title>
</template>

<script setup lang="ts">

console.log('测试文字')

</script>

<style scoped>

</style>