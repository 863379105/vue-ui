<template>
  <div id="app">
    <div>
      <k-button iconName='setting' iconPosition='right'>设置</k-button>
      <k-button iconName='download'>下载</k-button>
      <k-button iconName='upload'>上传</k-button>
      <k-group>
        <k-button iconName='left'>上一页</k-button>
        <k-button>更多</k-button>
        <k-button iconName='right' iconPosition='right'>下一页</k-button>
      </k-group>
    </div>
    <div>
      <k-icon name='download'></k-icon>
      <k-icon name='setting'></k-icon>
      <k-icon name='loading'></k-icon>
      <k-icon name='upload'></k-icon>
      <k-icon name='error'></k-icon>
      <k-icon name='info'></k-icon>
    </div>
    <div>
      <k-input></k-input>
      
      <k-input disabled v-model='disMsg'></k-input>
      <k-input error='姓名不能为空'></k-input>
    </div>
    <div>
      <k-input v-model="msg"></k-input>
      <span>{{msg}}</span>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col" data-span='1'></div>
      <div class="col"></div>
    </div>
    <k-row>
      <k-col colspan='6'></k-col>
      <k-col colspan='10'></k-col>
      <k-col colspan='2'></k-col>
    </k-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg:'输入...',
      disMsg:'禁用'
    }
  }
}
</script>

<style>
  *{padding: 0;margin: 0;box-sizing: border-box;}
  :root{
    --button-height:32px;
    --font-size:14px;
    --button-bg:white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666;
  }
  body{font-size: var(--font-size);}
  .row{
    width: 100%;
    display: inline-flex;
  }
  .col{
    height: 50px;
    background-color: grey;
    border: 1px solid red;
    width: 50%;
  }
  .col[data-span='1']{
    width: 8%
  }
</style>
