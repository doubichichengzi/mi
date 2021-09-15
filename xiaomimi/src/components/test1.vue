<template>
	<h1 class='red'>{{msg}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
	msg: {
		default:"我第一次使用vue 前端框架"
	},
  }
}
</script>

<style>
	.red{
		color: red;
	}
</style>
