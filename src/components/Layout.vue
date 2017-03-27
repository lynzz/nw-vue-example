<template>
	<div class="layout">
    <div class="layout__header">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <div class="layout__header-option">
        <div class="layout__header-option--max" @click="handleMax"><span>+</span></div>
        <div class="layout__header-option--close" @click="handleCloseWin"><span>x</span></div>
        <div class="layout__header-option--min" @click="handleMin"><span>-</span></div>
      </div>
    </div>
    <div class="layout__body">
      <div class="layout__assistant">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpenMenu" @close="handleCloseMenu">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">导航二</el-menu-item>
          <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
      </div>
      <div class="layout__panel">
        <div class="layout__content">
          <div class="layout__container">
            <div class="layout__breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="layout__inner">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="layout__footer">
          2017@
        </div>
      </div>
    </div>
	</div>
</template>

<script>
const win = nw.Window.get()
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },

  created () {

  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpenMenu (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCloseMenu (key, keyPath) {
      console.log(key, keyPath)
    },

    async handleCloseWin () {
      try {
        await this.$confirm('确定关闭窗口？', '提示')
        win.close()
      } catch (err) {

      }
    },
    handleMin () {
      win.minimize()
    },

    handleMax () {
      win.maximize()
    }
  }
}
</script>

<style scoped>
  @import '../theme/variables.css';

  $side-width: 300px;
  $header-height: 60px;
  $body-top: $header-height;

	@b layout {
		background: var(--menu-item-fill);
    
    @e header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 101;

      &-option {
        position: absolute;
        right: 0;
        top: 5px;
        width: 200px;
        height: 30px;
        display: flex;
        flex-direction: row-reverse;

        @nest &:hover {
          span {
            display: inline;
          }
        }

        @nest &--close, &--min, &--max {
          circle: 12px #ddd;
          border: 1px sloid #D9D9D9;
          margin: 0 5px;
          text-align: center;
          line-height: 12px;
          font-size: 9px;
          font-weight: 700;
          @utils-vertical-center;
          display: inline-block;
          cursor: pointer;
          span {
            display: none;
          }
        }

        &--close {
          background-color: var(--color-danger);
        }

        &--min {
          background-color: var(--color-warning);
        }

        &--max {
          background-color: var(--color-success);
        }
      }
    }

    @e body {
      position: absolute;
      top: $body-top;
      bottom: 0;
      z-index: 100;
      width: 100%;
    }

    @e logo {
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
    }

    @e assistant {
      position: fixed;
      left: 0;
      top: $body-top;
      width: $side-width;
      height: 100%;
      z-index: 102;
      background: #eef1f6;
    }
    
    @e breadcrumb {
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
      padding: 25px 15px;
      background-color: #fff;
      margin: -15px -15px 0;
    }
    &__panel,
    &__content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      background: #f5f5f5;
      transition: all .3s ease;
      width: auto;
    }
    @e panel {
      left: $side-width;
    }
    @e container {
      padding: 15px;
    }
    @e inner {
      padding: 10px;
      background: #fff;
      border-radius: 3px;
      margin-top: 10px;
    }
    @e footer {
      text-align: center;
      padding: 10px 0 20px;
      color: #fff;
    }
	}
	
</style>
