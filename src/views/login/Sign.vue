<template>
    <ul>
        <Com>
            <p slot="a">今天下雨了</p>
            <p slot="b">今天是晴天</p>
        </Com>
    </ul>
</template>

<script>
import Com from '@c/Com';
export default {
    components: {
        Com,
    },
};
</script>

