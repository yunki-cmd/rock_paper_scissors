<template>
<div>
  <div class="scored2">
    <Puntacion/>
  </div>
  <Seleccionar />
  <div class="reglas2">
    <Rules />
  </div>
</div>

</template>

<script>
import Puntacion from '../components/puntacion.vue'
import Seleccionar from '../components/sellecionar.vue'
import Rules from "../components/rules.vue"

export default {
  name: 'Home',
  components: {
    Puntacion,
    Seleccionar,
    Rules
},
  setup(){
    console.log('home')
  }
}
</script>

<style scoped>
.scored2 {
  position: relative;
  left: 10%;
}
.reglas2{
  position:absolute;
  display: inline-block;
  top: 800px;
  left: 1400px;
  z-index: 22222;
}

</style>
