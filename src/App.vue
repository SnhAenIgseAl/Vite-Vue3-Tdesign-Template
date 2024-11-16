<template>
	<el-text>Hello!</el-text>
	<HelloWorld :msg="'我是HelloWorld组件'"></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { useFetch, useAxios } from './utils/useRequest'

// 获取噼哩噼哩热搜
const getHotWord = async () => {
	let fres = await useFetch('https://pilipili-server.icu/hotword', 5000)
	console.log(fres)

	let ares = await useAxios({
		url: 'https://pilipili-server.icu/hotword',
		timeout: 5000
	})
	console.log(ares)
}
getHotWord()




</script>

<style scoped>
</style>
