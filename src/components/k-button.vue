<template>
    <button class="k-button">
        <k-icon v-if="iconName" :name="iconName" ></k-icon>
        <slot></slot>
    </button>
</template>
<script>

    export default {
        name : 'k-button',
        props:['iconName']
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
        display: inline-flex;
        justify-items: center;
        align-items: center;
        vertical-align: middle;
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
    .k-button svg{
        margin-right: 0.3em;
    }
</style>