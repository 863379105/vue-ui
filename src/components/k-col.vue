<template>
    <div class="k-col" :class="colClass" :style="colStyle" >
        <div style="border:1px solid green;height:50px">
            <slot></slot>
        </div>
    </div>
</template>
<script>
let validator = (value)=>{
    let keys = Object.keys(value)
    let flag = true
    keys.forEach((key)=>{
        if(!['colspan','offset'].includes(key)){
            flag = false
        }
    })
    return flag
}
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
        },
        phone:{type : Object,validator},
        ipad:{type : Object,validator},
        narrowPc:{type : Object,validator},
        pc:{type : Object,validator},
        widePc:{type : Object,validator},

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
                this.offset && `col-offset-${this.offset}`,
                ...(this.phone ? [`phone-col-span-${this.phone.colspan}`] : []),
                ...(this.ipad ? [`ipad-col-span-${this.ipad.colspan}`] : []),
                ...(this.narrowPc ? [`narrowPc-col-span-${this.narrowPc.colspan}`] : []),
                ...(this.pc ? [`pc-col-span-${this.pc.colspan}`] : []),
                ...(this.widePc ? [`widePc-col-span-${this.widePc.colspan}`] : []),
            ]
        }
    },
    methods:{}
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
        @media (max-width:'576px') {
            $class-prefix:phone-col-span-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }    
            }

            $class-prefix:phone-col-offset-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width:'576px')and(max-width:'768px') {
            $class-prefix:ipad-col-span-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }    
            }

            $class-prefix:ipad-col-offset-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width:'768px')and(max-width:'992px') {
            $class-prefix:narrowPc-col-span-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }    
            }

            $class-prefix:narrowPc-col-offset-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width:'992px')and(max-width:'1200px') {
            $class-prefix:pc-col-span-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }    
            }

            $class-prefix:pc-col-offset-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width:'1200px') {
            $class-prefix:widePc-col-span-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    width: ($n / 24) * 100%;
                }    
            }

            $class-prefix:widePc-col-offset-;
            @for $n from 1 through 24{
                &.#{$class-prefix}#{$n}{
                    margin-left: ($n /24) * 100%;
                }
            }
        }
    }
    
</style>