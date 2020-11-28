<template>
    <div class="k-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-content',
}
</script>
<style lang="scss" scoped>
    .k-content{
        border: 1px solid black;
        flex-grow: 1;
    }
</style>