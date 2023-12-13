
<template>
  <div>
   
   <Navbar currentPage="/card-flip-game" />
 
   <div
     class="grid items-center justify-center w-full min-h-screen grid-cols-5 bg-yellow-500"
   >
   
     <div
       v-for="(card, index) in cards"
       class="flex items-center justify-center w-20 h-20 text-3xl font-bold bg-white rounded-xl"
       @click="openCard(index)"
     >
       <p v-if="card.isFlipped">{{ card.value }}</p>
     </div>
   </div>
  </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       cards: [],
       openedCard: {
         value1: null,
         value2: null,
         index1:null,
         index2:null,
 
       },
     };
   },
   mounted() {
     for (let i = 0; i < 9; i++) {
       let randomNum = Math.floor(Math.random() * 99) + 1;
 
       this.cards.push({
         value: randomNum,
         isFlipped: false,
       });
 
       this.cards.push({
         value: randomNum,
         isFlipped: false,
       });
     }
 
     this.cards.sort(() => Math.random() - 0.5);
   },
   methods: {
     openCard(index) {
      
       if (this.openedCard.value1 === null) {
   
         this.openedCard.value1 = this.cards[index].value;
         this.openedCard.index1 = index;
         this.cards[index].isFlipped = true;
       } else if (this.openedCard.value2 === null) {
         this.openedCard.value2 = this.cards[index].value;
         this.openedCard.index2 = index;
         this.cards[index].isFlipped = true;
         
         setTimeout(() => {
          if (
            this.openedCard.value1 === this.openedCard.value2 &&
            this.openedCard.index1 !== this.openedCard.index2
          ) {
            alert("You win!");

            this.cards.forEach((card) => {
              card.isFlipped = false;
            });

            this.openedCard.value1 = null;
            this.openedCard.value2 = null;
          } else {
            this.cards[this.openedCard.index1].isFlipped = false;
            this.cards[this.openedCard.index2].isFlipped = false;
            this.openedCard.value1 = null;
            this.openedCard.value2 = null;
          }
        }, 300);
      }
    },
  },
};
</script>