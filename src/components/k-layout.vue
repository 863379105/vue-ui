<template>
    <div class="k-layout" :class="{'has-sider':hasSider}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-layout',
    data() {
        return {
            hasSider:false
        }
    },
    mounted(){
        this.$children.forEach((vm) => {
            console.log(vm.$options.name);
            if(vm.$options.name === 'k-sider'){
                this.hasSider = true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    .k-layout{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border: 1px solid tomato;
        &.has-sider{
            flex-direction: row;
        }
    }
</style>