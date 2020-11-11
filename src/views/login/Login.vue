<template>
    <div id="particles">
        <div class="main">
            <el-form ref="form" label-width="80px" size="medium">
                <el-form-item label="账号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        particlesJS.load('particles', 'particles.json');
    },
};
</script>

<style lang="less">
#particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    .main {
        width: 500px;
        height: 360px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -180px;
        margin-left: -250px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
}
</style>