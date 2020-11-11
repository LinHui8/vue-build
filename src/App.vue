<template>
    <div>
        <router-link to="/login">登录页面</router-link>|
        <router-link to="/sign">注册页面</router-link>
        <button @click="btn">点击</button>
        <router-view />
    </div>
</template>

<script>
import API from './utils/axios';
export default {
    mounted() {},
    methods: {
        async btn() {
            const data = await API.get('/api/list').then((res) => {
                console.log(res);
            });
            const data1 = await API.get('/foo/list').then((res) => {
                console.log(res);
            });
        },
    },
};
</script>

<style lang="less">
</style>
