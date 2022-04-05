<template>
<div class="container">
  <div class="titulo">
  <span>Rock</span>
  <span>Paper</span>
  <span>scissors</span>
  </div>
  <div class="score">
    <span>score</span>
    <span>{{score}}</span>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Puntacion',
  setup(){
    const store = useStore()
    return {
      // access a state in computed function
      score: computed(() => store.state.score),
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  width:calc(100% - 50%);
  justify-content: space-between;
  border: solid 3px hsl(217, 16%, 45%);
  border-radius:15px;
  position: absolute;
  padding:1rem 0;
  top: 125px;
  left: 200px;
}
.score{
  margin: 1rem;
  width:150px;
  background-color:white;
  font-family: 'Barlow Semi Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  border-radius:15px;
  position: relative;
}
.score span:first-child{
  color: hsl(229, 64%, 46%);
  letter-spacing: 1px;
  font-size:20px;
  text-align: center;
  margin: 15px;
}
.score span:nth-child(2){
  color: hsl(229, 25%, 31%);
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  position: relative;
  top: -10px;
}
.titulo{
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
  margin: 0 0 0 2rem; 
}
</style>
