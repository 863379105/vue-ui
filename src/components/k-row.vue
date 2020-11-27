<template>
    <div class="k-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name : 'k-row',
    props:{
        gutter:{
            type:[String,Number],
        }
    },
    mounted(){
        this.$children.forEach(vm => {
            vm.$data.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
    .k-row{
        display: flex;
        border: 1px black solid;
    }
</style>