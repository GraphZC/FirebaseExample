<template>
	<div class="bg-white/[0.5] w-full block p-5">
		<span class="bg-pink-300 px-5 rounded-full">{{ type }}</span><br/>
		น้อง {{ name }}<br />
		อายุ {{ age }} ขวบ<br />
		<span v-if="isVaccinated" class="text-green-600">ได้รับวัคซีนแล้ว</span>
		<span v-else class="text-red-500">ยังไม่ได้ฉีดวัคซีน</span>
	</div>
</template>

<script>
export default {
	name: "PetCard",
	props: {
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		isVaccinated: {
			type: Boolean,
			required: true,
		},
	},
	methods: {

	},
	mounted() {

	},
};
</script>

<style>

</style>