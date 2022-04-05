<template>
  <Transition :css="false">
    <div class="play" v-if="!data.visible">
      <Lanzamiento  @click.stop="handlerPlay" name="papel" tipo= "papel" />
      <Lanzamiento  @click.stop="handlerPlay" name="piedra" class= "rock" tipo= "piedra" />
      <Lanzamiento  @click.stop="handlerPlay" name="scissors" tipo= "scissors" />
  </div>
</Transition>
    <div class="playing" v-if="data.visible">
      <div ref="selecction1" class="selection--1" @transitionend="displayButton">
        <span class="youPick">YOU PICK</span>
        <Lanzamiento :tipo="data.userSelect" class="result" />
      </div>
      <div ref="selecction2" class="selection--2">
         <span class="youPick">THE HOUSE PICK</span>
        <Lanzamiento  class="animated result" :tipo="data.computer" @animationend="prueba"/>
      </div>
      <div v-if="!data.wait" class="resultado">
        <div class="resultado__text">
          <span  class="playing__text">{{data.result}}</span>
          <button class="button" @click="handlerPlay"> play again</button>
        </div>
      </div>
    </div>
</template>

<script>
import Lanzamiento from './lanzamiento.vue'
import { reactive,ref } from 'vue';
import {getRandom,piedraPapelTiejera} from '../util/random'
import { useStore } from 'vuex'
import Rules from "../components/rules.vue"
export default {
  components:{
    Lanzamiento,
    Rules
  },
  setup(){
    const selecction1 = ref()
    const selecction2 = ref()
    const store = useStore()
    const data = reactive({
      visible: false,
      options:['papel','piedra','scissors'],
      userSelect : '',
      computer: '',
      result : '',
      wait: false,
    })
    const handlerPlay = (e)=>{
      if(e.target !== e.currentTarget){
        data.userSelect = e.currentTarget.getAttribute('name')
        data.computer = 'interrogracion'
        data.visible = !data.visible
        data.wait = !data.wait
      } else if(e.currentTarget.tagName ==='BUTTON'){
        data.visible = !data.visible
      }

    }
    const indice = (array,buscar) =>{
      return array.findIndex(element => element === buscar)
    }
    const handlerScore = (result) =>{
      if(result === 'YOU WIN'){
        store.commit('increment')
      }else if(result === 'YOU LOSS'){
        store.commit('decrement')
      }
    }
    const prueba = () => {
      data.computer = (data.options[getRandom()])
      selecction1.value.classList.add("translate__left")
      selecction2.value.classList.add("translate__rigth")   
    }
    const displayButton = () =>{
      let result = piedraPapelTiejera(indice(data.options,data.userSelect),indice(data.options,data.computer))
        if( result === -1 ) data.result = 'DRAW'
        else if( data.options[result] === data.userSelect) data.result = 'YOU LOSS'
        else data.result ='YOU WIN'
      handlerScore(data.result)
      data.wait = !data.wait
    }
    return {handlerPlay,data,prueba,selecction1,selecction2,displayButton}
  }
}
</script>

<style>
.play {
  position: relative;
  height:300px;
  top: 400px;
  left: 35%;
  display: inline-block;
  z-index: 1;
}
.play div{
  cursor: pointer;
  position: relative;
}
.play div:nth-child(1):before{
  content: '';
  position: absolute;
  height:15px;
  width: 350px;
  background: black;
  z-index: -1;
  left:10px;
  top: 40px;
  overflow: hidden;
  cursor: auto;
  opacity: 0.4;
}
.play div:nth-child(2):before{
  content: '';
  position: absolute;
  height:15px;
  width: 200px;
  background: black;
  z-index: -1;
  left:-100px;
  top: 20px;
  overflow: hidden;
  cursor: auto;
  opacity: 0.4;
  transform: rotate(60deg);
}
.play div:nth-child(3):before{
  content: '';
  position: absolute;
  height:15px;
  width: 200px;
  background: black;
  z-index: -1;
  left:-100px;
  top: 120px;
  overflow: hidden;
  cursor: auto;
  opacity: 0.4;
  transform: rotate(-60deg);
}
.playing {
  position: relative;
  height:400px;
  width:700px;
  top: 400px;
  left: 30%;
  display: inline-block;
  z-index: 222;
}
.playing div{
  cursor: pointer;
  position: relative;
}
.selection--1{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  left: 100px;
  margin: 2rem;
   transition: 1s ease-in-out;
}
.selection--2{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding:5px;
  left: 100px;
  margin: 2rem;
   transition: 1s ease-in-out;
}
.youPick{
  position: absolute;
  text-align: center;
  top: -50px;
  font-size:20px;
  width: 100%;
}

.playing__text{
  font-size: 48px;
  margin: 2rem 0;
}
.resultado{
  top: -300px;
  left: 300px;
}
.resultado__text{
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(-100px,150px);
}
.resultado .button {
  border: solid 1px black;
  background:white;
  white-space: nowrap;
  padding: 1rem 6rem;
  border-radius: 10px;
  color: black;
  font-size:16px;
  outline: none;
  transition: all .3s
}
.resultado .button:hover{
  transform: scale(1.03);
  color: red;
}
.resultado .button:active{
  transform: scale(0.98);
}
.rock{
  position: relative;
  top: 160px;
}
.result{
  height:100px;
  width:100px;
  display: flex;
}

.animated{
  position:absolute;
  background-color:white;
  padding:1.5rem;
  border-radius:50%;
  border: solid 15px black;
  animation: spin;
  animation-duration: 2s;
}

.translate__left{
  transform: translateX(-300px)
}

.translate__rigth{
  transform: translateX(200px)
}

@keyframes spin {
 0% {transform: perspective(400px) rotateY(0deg);
 opacity:0.3;}
 50%{opacity:0.7}
  100% {
    transform: perspective(400px) rotateY(360deg);
    opacity:0.9
    }
}

</style>