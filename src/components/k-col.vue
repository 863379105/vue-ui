<template>
    <div class="k-col" :class="colClass" :style="colStyle" >
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
        },
        phone:{
            type : Object,
            validator(value){
                let keys = Object.keys(value)
                let flag = true
                keys.forEach((key)=>{
                    if(!['colspan','offset'].includes(key)){
                        flag = false
                    }
                })
                return flag
            }
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
            let phoneClass = []
            // let {phone} = this
            // console.log(this.phone);
            if(this.phone){
                phoneClass = [`phone-col-span-${this.phone.colspan}`]
            }
            // console.log(...phoneClass);
            return [
                this.colspan && `col-span-${this.colspan}`,
                this.offset && `col-offset-${this.offset}`,
                ...phoneClass
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
    }
    
</style>