<template>
    <div :class="`k-col k-col-${colspan}`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-col',
    props:{
        'colspan':{
            type:String,
            default:'1'
        }
    }
}
</script>
<style lang="scss" scoped>
    .k-col{
        height: 50px;
        background-color: grey;
        border: 1px solid red;
        width: 50%;
        
        $class-prefix:k-col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }    
        }
    }
</style>