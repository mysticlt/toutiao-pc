<template>

    <div slot="header" name="lal">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
            <slot></slot>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

</template>

<script>
export default {}
</script>

<style>
</style>
