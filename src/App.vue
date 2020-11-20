<template>
  <div id="app">
    <k-button></k-button>
  </div>
</template>

<script>
import kButton from './components/k-button.vue'

export default {
  name: 'App',
  components: {
    kButton
  }
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
