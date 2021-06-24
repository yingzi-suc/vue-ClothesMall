<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
      data(){
          return {
            message: '',
            isShow: false
          }
      },
      methods: {
          show(message='点击成功',duration=2000) {
            this.isShow = true
            this.message = message

            setTimeout(()=>{
              this.isShow = false
              this.message = ''
            },duration)
          }
      }
    }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: red;
    padding: 10px;
    z-index: 999;
  }
</style>
