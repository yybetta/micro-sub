<!--
 * @Description: 
 * @Author: JZT.吴健
 * @Date: 2025-04-20 21:57:02
 * @LastEditors: JZT.吴健
 * @LastEditTime: 2025-11-13 19:21:04
-->
<template>
    <div class="app-container">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<style lang="scss">
    @use './styles/index.scss';

    .app-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
