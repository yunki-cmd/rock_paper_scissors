<template>
  <div class="rules">
    <button @click="reglas">
      <span>RULES</span>
    </button>
  </div>
  <div v-if="data.showmodale" class="modal" @click="clickOut">
    <div class="modal-body" ref="modalBody">
      <span class="modal-body-title">RULES</span>
      <img src="/images/image-rules.svg" alt="">
      <button class="btn-x" @click="reglas" >X</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue"

export default {
  setup(){
    const modalBody = ref()
    const data = reactive({
      showmodale:false
    })
    const reglas = () =>{
      data.showmodale = !data.showmodale
    }
    const clickOut = (event) =>{
      if(!modalBody.value.contains(event.target)){
        data.showmodale = !data.showmodale
      }
    }
    return {reglas,data,clickOut,modalBody}
  }
}
</script>

<style>

.rules button{
   font-family: 'Barlow Semi Condensed', sans-serif;
   color: white;
   background-color:transparent;
   border:1px white solid;
   border-radius: 15px;
   width: 130px;
   height: 50px;
   cursor: pointer;
   font-weight: bold;
}
.rules span{
  letter-spacing: 4px;
}
.modal{
  display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.modal-body{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  height: 500px;
  width: 500px;
  background-color:white;
  position: relative;
  border-radius: 25px;
}
.modal-body-title{
  position: absolute;
  transform: translate(-180px,-200px);
  font-size: 36px;
  font-weight: bold;
  color: rgb(85, 116, 143);
}
.btn-x{
  position: absolute;
  transform: translate(180px,-200px);
  font-size: 36px;
  font-weight: bold;
  color: rgb(156, 173, 189);
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-color:transparent;
  border:1px white solid;
  border-radius: 15px;
  width: 130px;
  height: 50px;
  cursor: pointer;
}
</style>