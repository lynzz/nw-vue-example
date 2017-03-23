<template>
	<div class="layout">
    <div class="layout-header">
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
    </div>
    <div class="layout-body">
      <div class="layout-assistant">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
      <div class="layout-panel">
        <div class="layout-content">
          <div class="layout-container">
            <div class="layout-breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="layout-inner">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="layout-footer">
          2017@
        </div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  $side-width: 300px;
  $header-height: 60px;

	.layout {
		background: var(--menu-item-fill);
    
    &-header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 101;
    }

    &-body {
      position: absolute;
      top: $header-height;
      bottom: 0;
      z-index: 100;
      width: 100%;
    }

    $__logo {
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
    }

    &-assistant {
      position: fixed;
      left: 0;
      top: $header-height;
      width: $side-width;
      height: 100%;
      z-index: 102;
      background: #eef1f6;
    }
    
    &-breadcrumb {
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
      padding: 25px 15px;
      background-color: #fff;
      margin: -15px -15px 0;
    }
    &-panel,
    &-content {
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
    &-panel {
      left: $side-width;
    }
    &-container {
      padding: 15px;
    }
    &-inner {
      padding: 10px;
      background: #fff;
      border-radius: 3px;
      margin-top: 10px;
    }
    &-footer {
      text-align: center;
      padding: 10px 0 20px;
      color: #fff;
    }
	}
	
</style>
