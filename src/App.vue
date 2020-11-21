<template>
  <div id="app">
    <div>
      <k-button iconName='setting' iconPosition='right'>设置</k-button>
      <k-button iconName='download'>下载</k-button>
      <k-button iconName='upload'>上传</k-button>
      <k-group>
        <k-button iconName='left'>上一页</k-button>
        <k-button iconName='download'>下载</k-button>
        <k-button iconName='upload'>上传</k-button>
        <k-button iconName='right' iconPosition='right'>下一页</k-button>
      </k-group>
    </div>
    <div>
      <k-icon name='download'></k-icon>
      <k-icon name='setting'></k-icon>
      <k-icon name='loading'></k-icon>
      <k-icon name='upload'></k-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
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
  body{
    font-size: var(--font-size);
  }
</style>
