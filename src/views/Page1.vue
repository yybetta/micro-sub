<!--
 * @Description: 1
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-14 10:36:17
-->
<template>
    <div>子应用 Page1</div>
    <form>
        这是form内的input: <input v-model="name" type="text" placeholder="请输入用户名" /> 输入后，点击下方跳转page2 edge下页面崩溃
    </form>
    <div style="margin-top: 20px;">
        这是form外的普通input
        <input v-model="name2" type="text" placeholder="请输入用户名" />
        输入后，点击下方跳转page2 页面正常
    </div>
    <button style="margin-top: 20px;" @click="goPage2">跳转page2</button>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    import { ref } from 'vue'
    const name = ref('')
    const name2 = ref('')
    function goPage2() {
        router.push({
            path: '/page2'
        })
    }
</script>
