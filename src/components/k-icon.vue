<template>
    <svg class="icon" :class="['k-icon',{'icon-right':position==='right'}]">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
export default {
    name : 'k-icon',
    props:{
        'name':{
            type:String
        },
        'position':{
            type : String,
            default : 'left'
        }
    }
}
</script>
<style scoped>
    .k-icon{
        height: 1em;
        width: 1em;
    }
    .icon-right{
        margin-left: 0.3em;
        order: 2
    }
</style>