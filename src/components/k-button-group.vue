<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .button-group{
        display: inline-flex;
        vertical-align: middle;
    }
    .button-group > *{
        border-radius: 0;
    }
    .button-group button:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }
    .button-group button:not(:first-child){
        margin-left: -1px;
    }
    .button-group button:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    .button-group button:hover{
        position: relative;
        z-index: 99999;
    }
</style>