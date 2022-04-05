<template>
 <div :class="props.tipo !== 'interrogracion' ? 'circle-background' : 'circle-background2'">
   <img :src="lanza[props.tipo].img" alt="">
 </div>
</template>

<script>
import { reactive } from "vue"
export default {
  props: {
    tipo:String
  },
  name:'Lanzamiento',
  setup(props){
    const lanza = reactive({
      piedra : {
        img: '/images/icon-rock.svg',
        color:'hsl(349, 71%, 52%)'
        },
      papel: {
        img: '/images/icon-paper.svg',
         color:'hsl(230, 89%, 62%)'
         },
      scissors: {
        img:'/images/icon-scissors.svg',
         color:'hsl(39, 89%, 49%)'
         },
      interrogracion:{
        img: "/images/interrogation.svg",
        color:'black'
      }
    })
    const color = () =>{
      return lanza[props.tipo].color
    }
    return {lanza,props,color}
  }
}
</script>

<style scoped>
.circle-background{
  display: inline-flex;
  background-color:white;
  padding:1.5rem;
  border-radius:50%;
  border: solid 15px v-bind('color()');
}
.circle-background img{
  min-width: 48px;
  min-height: 48px;
  padding:1rem;
  }
.circle-background2{
  display: inline-flex;
  background-color:rgb(253, 253, 253);
  padding:1.5rem;
  border-radius:50%;
  border: solid 15px v-bind('color()');
}
.circle-background2 img{
  padding:1rem;
  min-width: 48px;
  min-height: 48px;
}
</style>