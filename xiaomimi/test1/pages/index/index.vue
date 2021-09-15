<template>
	<div>
		<h1 class='box'>{{title}}</h1>
		
		<xinwenzhanshi title='新闻' content="hi vue" @showTitle='showTitle'></xinwenzhanshi>
		<!-- <uni-number-box></uni-number-box>
		<uni-number-box v-model = "vModelValue" />
		<uni-number-box :min="0" :max="9"></uni-number-box>
		<uni-number-box @change="bindChange"></uni-number-box> -->
	</div>
		
	
	
</template>

<script>
//import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue";
import xinwenzhanshi from "@/components/xinwenzhanshi.vue";
export default {
	data() {
		return {
			title: 'Hello 666'
		}
	},
	onLoad() {

	},
	methods: {
		showTitle:function(e){
			console.log(e);
		}
	},
	components:{
		xinwenzhanshi
	//	uniNumberBox
	}
}
</script>

<style lang='less'>
@import "../../less.less";
</style>


