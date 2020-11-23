<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text" :disabled='disabled' :value="value"
            @change="$emit('change',$event.target.value,$event)"
            @input="$emit('input',$event.target.value,$event)"
            @focus="$emit('focus',$event.target.value,$event)"
        >
        <template v-if='error'>
            <k-icon name='error' :class="{'icon-err':error}"></k-icon>
            <span :class="{'msg-err':error}">{{error}}</span>
        </template>
    </div>
</template>
<script>
export default {
    name : 'k-input',
    props:{
        disabled:{
            type :Boolean
        },
        error:{
            type:String
        },
        value:{
            type : String,
            default:''
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
    $boder-color: #999;
    $boder-color-hover:#666;
    $border-width:1px;
    $border-radius:4px;
    $background-color: #FFFFFF;
    $font-size:14px;
    $line-height:14px;
    $error-color:#F1453D;
    .wrapper{
        font-size: $font-size; display:inline-flex;justify-items:center;align-items: center; 
        > *:not(:last-child){margin-right: 0.3em;}
        > input{
            width: 128px;height: 32px;border: $border-width $boder-color solid;border-radius: $border-radius;background-color: $background-color;padding: 0 0.5em;font-size: $font-size;line-height: $line-height;
            &:hover{border: 1px $boder-color-hover solid;}
            &:focus{outline: none;box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);}
            &:disabled{border: 1px #999 solid;background-color: #ECECEC;cursor: not-allowed;}
        }
        &.error{
            > input{border: 1px solid $error-color;}
            .icon-err{fill:$error-color}
            .msg-err{color:$error-color}
        }
    }
</style>