<script lang="javascript">
  import { onMount } from "svelte";
  import key1 from "$lib/assets/key1t.png";
  import key2 from "$lib/assets/key2.png";
  import key3 from "$lib/assets/key3.png";
  import jump from "$lib/assets/jump.mp3";
  import pumpkin from "$lib/assets/pumpkin.mp3";

  let time = 0;
  let randomInt1;
  let randomInt2;
  let randomInt3;
  let randomInt4;
  let randomInt5;
  let randomInt6;
  let keysCount = 0;

  onMount(() => {
    const interval = setInterval(() => {
      time += 1;
    }, 150);

    const timeOut = () => {
      var audio = new Audio(jump);
      audio.play();
      const interval = setInterval(() => {
        audio.pause();
      }, 5000);
    };
    const keyFound = (i) => {
      alert(`You found key ${i}`);
    };

    let flashlight = document.getElementById("cursor");
    document.addEventListener("mousemove", function handleMouseMove(event) {
      cursor.style.setProperty("--position-x", event.clientX - 100 + "px");
      cursor.style.setProperty("--position-y", event.clientY - 100 + "px");
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomInt1 = getRandomInt(10, 90);
    randomInt2 = getRandomInt(10, 90);
    randomInt3 = getRandomInt(10, 90);
    randomInt4 = getRandomInt(10, 90);
    randomInt5 = getRandomInt(10, 90);
    randomInt6 = getRandomInt(10, 90);
  });
  let boolOne = true;
  let boolTwo = true;
  let boolThree = true;

  function giveUp() {
    console.log("start giveup");
    winOne();
    winTwo();
    winThree();
    var audio = new Audio(pumpkin);
    audio.play();
  }
  function winOne() {
    boolOne = false;
    keyWin();
  }
  function winTwo() {
    boolTwo = false;
    keyWin();
  }
  function winThree() {
    boolThree = false;
    keyWin();
  }
  function keyWin() {
    keysCount++;
    if (keysCount >= 3) {
      var audio = new Audio(jump);
      audio.play();
      const interval = setInterval(() => {
        audio.pause();
      }, 5000);

      window.open("https://spookyscarrysite.vercel.app/", "_blank").focus();
    }
    // var audio = new Audio();
  }
</script>

<div class="container">
  <div class="cursor" id="cursor" />
</div>
{#if boolOne == true}
  <div class="keyContainer" on:click={winOne}>
    <img
      id="key1"
      class="key1 key"
      src={key1}
      alt=""
      style="left: {randomInt1}%; top: {randomInt2}%"
    />
  </div>
{/if}
<div class="buttons_two">
  <div class="timer">
    <h1 class="spookyText text-purple-800 text-4xl">TIME: {time}</h1>
  </div>
</div>

{#if boolTwo == true}
  <div class="keyContainer" on:click={winTwo}>
    <img
      id="key2"
      class="key2 key"
      src={key2}
      alt=""
      style="left: {randomInt3}%; top: {randomInt4}%"
    />
  </div>
{/if}

{#if boolThree == true}
  <div class="keyContainer" on:click={winThree}>
    <img
      id="key3"
      class="key3 key"
      src={key1}
      alt=""
      style="left: {randomInt5}%; top: {randomInt6}%"
    />
  </div>
{/if}
<div class="background" />

<!-- <div class="flex">
    <h1 align="left" class="spookyText text-purple-800 text-5xl">First Room</h1>
    <h1
      align="right"
      class="spookyText text-purple-800 text-5xl"
      style="margin-left: auto;"
    >
      Timer:
    </h1>
  </div> -->
<!-- </div> -->

<style>
  /* .timer {
    position: absolute;
  } */
  :global(body) {
    background-image: url("$lib/assets/interior.jpeg");
    background-size: cover;
    opacity: 0.95;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 2;
    position: absolute;
  }
  .background {
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 5;
    margin-top: 0;
  }
  #cursor {
    width: 250px;
    mix-blend-mode: luminosity;
    position: absolute;
    height: 250px;
    transform: translate(var(--position-x, 0px), var(--position-y, 0px));
    border-radius: 150px;
    background: radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    z-index: 8;
  }
  .key1 {
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 100;
    left: var(--randint-1) + "%";
    top: randomInt2 + "%";
    opacity: 0;
    margin: 50px;
    border: 50px;

    /* transition: "opacity 0.5s ease-in"; */
  }

  .key2 {
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 100;
    left: randomInt3 + "%";
    top: randomInt4 + "%";
    opacity: 0;
    margin: 50px;
    border: 50px;
  }

  .key3 {
    width: 75px;
    height: 75px;
    position: absolute;
    z-index: 100;
    left: randomInt5 + "%";
    top: randomInt6 + "%";
    opacity: 0;
    /* margin: 50px; */
    border: 50px;
  }
  .key1:hover {
    opacity: 1;
  }
  .key2:hover {
    opacity: 1;
  }
  .key3:hover {
    opacity: 1;
    /* transition: opacity 0.5s ease-in; */
  }
  .container {
    position: absolute;
  }
  @font-face {
    font-family: spookyText;
    src: url("$lib/spookyFont.otf");
  }
  .spookyText {
    font-family: spookyText;
  }
</style>
