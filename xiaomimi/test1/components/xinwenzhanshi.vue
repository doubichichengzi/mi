<template>
	<view>
		<h1 v-bind:class='red1' @click='click1()'>{{title}}</h1>
		<p>{{content}}</p>
	</view>
</template>

<script>
	export default {
		name:"xinwenzhanshi",
		props:{
			title:{
				type:String,
				default:"",
			},
			content:{
				type:String,
				default:"",
			}
				
		},
		methods:{
			click1:function(){
				console.log(1);
				this.$emit("showTitle",this.title)
			}
		},
		data() {
			return {
				red1:"red"
			};
		}
	}
</script>

<style>
.red{
	color: red;
}
</style>
