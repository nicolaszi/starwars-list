<script setup>
import { RouterView } from "vue-router";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <div class="stars"></div>
  <div class="twinkl"></div>
  <TopBar />
  <RouterView />
  
  <div class="animate-starship">
    <div id="starship-container">
      <div class="flame"></div>
      <img id="starship" src="@/assets/img/starship.svg" />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}

@font-face {
  font-family: "Starjedi";
  src: local("Starjedi"), url(./fonts/starjedi/Starjhol.ttf) format("truetype");
}

.stars,
.twinkl {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.stars {
  background: #000 url("https://s3.bmp.ovh/imgs/2021/09/3760b5e2cc46f556.png")
    repeat top center;
}
.twinkl {
  background: transparent
    url("https://s3.bmp.ovh/imgs/2021/09/68c03ba1cf80ca8b.png") repeat top
    center;
  z-index: 0;
  animation: move-twink-back 200s linear infinite;
}
@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@keyframes starshipMovement {
  0% {
    left: -100px;
  }

  100% {
    left: 100%;
  }
}


.animate-starship {
  margin-top: 130px;
  overflow: hidden;
}

#starship-container {
  -webkit-animation: starshipMovement 8s infinite;
  -moz-animation: starshipMovement 8s infinite;
  animation: starshipMovement 8s infinite;
  display: flex;
}

#starship {
  width: 150px;
  height: 150px;
  transform:rotate(90deg);
}

.flame{
	width:150px;
	height:150px;
	background:linear-gradient(-45deg, red, orange);
	border-radius: 150px 150px 0px 150px;
	transform:rotate(130deg);
	animation:.1s flame infinite;
	filter:blur(10px);
	position:relative;
  right: -60px;
	border:45px solid black;
	border-left-width:25px;
	border-top-width:25px;
	

}

@keyframes flame{
  0% {height:150px; width:150px;}
  50% {height:140px; width:140px;}
  100% {height:150px; width:150px;}
}
</style>
