<template>
    <div class="k-header">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-header',
}
</script>
<style lang="scss" scoped>
    .k-header{
        border: 1px solid black;
        height: 100px;
    }
</style>