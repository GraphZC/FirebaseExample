<template>
    <div class="container mx-auto my-5 p-8">
        <h1 class="text-4xl font-bold ">
            สัตว์เลี้ยงของฉัน
        </h1>
        <div class="grid grid-cols-3 gap-4 mt-5">
            <PetCard
                v-for="pet in pets"
                :key="pet.id"
                :name="pet.name"
                :age="pet.age"
                :type="pet.type"
                :isVaccinated="pet.isVaccinated"
            />
        </div>
    </div>
</template>

<script>
import PetCard from '../components/PetCard.vue';
import { usePetsStore } from '../stores/pets';

export default {
    name: "PetList",
    components: {
		PetCard
	},
    data() {
        return {
            pets: [],
        };
    },
    async mounted()  {
        await usePetsStore().fetchPets();
        // this.pets = usePetsStore().getPets;
        // console.log(usePetsStore().getPets);
    }
    
}
</script>

<style>

</style>