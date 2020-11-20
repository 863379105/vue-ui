<template>
    <button class="k-button">按钮</button>
</template>
<script>
    export default {
        name : 'k-button'
    }
</script>
<style scoped>
    .k-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background-color: var(--button-bg);
    }
    .k-button:hover{
        border: 1px solid var(--border-color-hover);
    }
    .k-button:active{
        background-color: var(--button-active-bg);  
    }
    .k-button:focus{
        outline: none;
    }
</style>