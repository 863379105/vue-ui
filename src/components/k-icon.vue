<template>
    <svg class="icon" :class="'k-icon'">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
export default {
    name : 'k-icon',
    props:['name']
}
</script>
<style scoped>
    .k-icon{
        height: 1em;
        width: 1em;
    }
</style>