<template>
	<div>
		<div class="flex justify-center items-center">
			<div class="flex basis-5/12 bg-white mt-20 flex-col px-8 py-8">
				<h1 class="text-2xl font-bold px-5 py-8 block w-full text-center">ฐานข้อมูลสัตว์เลี้ยง</h1>
				<form @submit.prevent="login">
					<div class="mb-3">
						<label for="username">ชื่อผู้ใช้</label>
						<input type="text" v-model="username" id="username" class="my-input" required/>
					</div>
					<div class="mb-3">
						<label for="password">รหัสผ่าน</label>
						<input type="password" v-model="password" id="password" class="my-input" required/>
					</div>
					<div class="flex justify-center">
						<button type="submit" class="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-400 transition-colors">เข้าสู่ระบบ</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import PetCard from '../components/PetCard.vue';
export default {
	name: "Home",
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		login() {
			console.log(this.username);
			console.log(this.password);
		},
	},
}
</script>

<style>
body {
	background-image: url("https://assets.brandinside.asia/uploads/2020/04/pets-3715733_1920.jpg");
	background-size: cover;
}

</style>