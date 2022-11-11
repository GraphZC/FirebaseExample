import { defineStore } from "pinia";
import { collection , getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export const usePetsStore = defineStore('pets', {
    state: () => ({
        pets: []
    }),
    getters: {
        getPets: (state) => {
            return state.pets;
        },
    },
    actions: {
        async fetchPets() {
            const queryData = await getDocs(collection(db, "pets"));
            queryData.forEach((doc) => {
                console.log(doc.data());
            })

            // const queryData = await getDocs(collection(db, "pets"));
            // this.pets = [1, 2, 3];
            // this.pets = queryData.docs.map((doc) => doc.data());
        }
    },
});