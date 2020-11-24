<template>
    <div class="k-col" :class="[colspan && `col-span-${colspan}`,offset && `col-offset-${offset}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'k-col',
    props:{
        colspan:{
            type:[String,Number],
        },
        offset:{
            type:[String,Number],
        }
    }
}
</script>
<style lang="scss" scoped>
    .k-col{
        height: 50px;
        background-color: grey;
        border: 1px solid red;
        width: 100%;
        
        $class-prefix:col-span-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n / 24) * 100%;
            }    
        }

        $class-prefix:col-offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n /24) * 100%;
            }
        }
    }
</style>