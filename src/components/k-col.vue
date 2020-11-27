<template>
    <div class="k-col" 
        :class="[colspan && `col-span-${colspan}`,offset && `col-offset-${offset}`]"
        :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border:1px solid green;height:50px">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'k-col',
    data() {
        return {
            gutter:0
        }
    },
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
        // background-color: grey;
        // border: 1px solid red;
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