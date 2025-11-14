<!--
 * @Description: 1
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-14 08:38:22
-->
<template>
    <div>子应用 Page1</div>
    <form>
        <input v-model="name" type="text" placeholder="请输入用户名" />
    </form>
    <button @click="goPage2">page2</button>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    import { ref } from 'vue'
    const name = ref('')
    function goPage2() {
        router.push({
            path: '/page2'
        })
    }
</script>
