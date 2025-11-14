<!--
 * @Description: 1
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-14 10:32:53
-->
<template>
    <div>子应用 page2</div>
    <button @click="goPage1">返回page1</button>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    function goPage1() {
        router.replace({
            path: '/'
        })
    }
</script>
