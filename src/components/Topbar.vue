<template>
  <div class="topbar">
    <div class="topbar__name">{{name}}</div>
    <div class="topbar__option">
      <div class="topbar__option--close" @click="handleClose">x</div>
      <div class="topbar__option--min" @click="handleMin">-</div>
      <div class="topbar__option--max" @click="handleMax">+</div>
    </div>
  </div>
</template>
<script>
  const win = nw.Window.get()
  const tray = new nw.Tray({title: 'NW'})
  tray.on('click', function () {
    win.show()
  })

  export default {
    data () {
      return {
        name: require('../../package.json').name
      }
    },
    methods: {
      async handleClose () {
        try {
          await this.$confirm('确定窗口？', '提示')
          win.close()
        } catch (err) {

        }
      },
      handleMin () {
        win.hide()
      },

      handleMax () {
        win.hide()
      }
    }
  }
</script>

<style scoped>
  @import '../theme/variables.css';

  @b topbar {
    height: 30px;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    @e name {
      color: var(--color-primary);
    }
    @e option {
      
    }
  }
</style>
