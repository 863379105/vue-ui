<template>
    <div class="k-row">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name : 'k-row'
}
</script>
<style lang="scss" scoped>
    .k-row{
        display: inline-flex;
        width: 100%;
    }
</style>