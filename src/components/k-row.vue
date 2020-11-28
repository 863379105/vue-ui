<template>
    <div class="k-row" 
    :style="rowStyle">
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
    },
    computed:{
        rowStyle(){
            return {
                marginLeft:-this.gutter/2+'px',
                marginRight:-this.gutter/2+'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .k-row{
        display: flex;
        flex-wrap: wrap;
        border: 1px black solid;
    }
</style>