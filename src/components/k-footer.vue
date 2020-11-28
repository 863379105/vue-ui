<template>
    <div class="k-footer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-footer',
}
</script>
<style lang="scss" scoped>
    .k-footer{
        border: 1px solid black;
        height: 100px;
    }
</style>