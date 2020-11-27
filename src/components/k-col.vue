<template>
    <div class="k-col" :class="colClass" :style="colStyle">
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
    },
    computed:{  
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'
            }
        },
        colClass(){

            return [
                this.colspan && `col-span-${this.colspan}`,
                this.offset && `col-offset-${this.offset}`
            ]
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