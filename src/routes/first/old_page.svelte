<script>
  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("mousemove", (event) => {
      const cursor = document.querySelector("cursor");
      // console.log(event.clientX + "x" + event.clientY);
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
    document.addEventListener("click", (event) => {
      const cursor = document.querySelector("cursor");
      // console.log(event.clientX + "x" + event.clientY);
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
  });
</script>

<!-- style={`left: ${event.clientX}px, top: ${event.clientY}px`} -->

<!-- <div class="container"> -->
<div class="cursor" id="cursor">
  <p align="center">Light</p>
</div>

<!-- <script>
  const ignitecursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "block";
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  };

  document.addEventListener("mousemove", function (e) {
    ignitecursor(e);
  });

  document.addEventListener("click", function (e) {
    ignitecursor(e);
  });
</script>

<div class="cursor">
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
<!-- </div>

<style>
  :bind(body) {
    background-image: url("$lib/assets/Key1.png");
    background-size: cover;
  }
  @font-face {
    font-family: spookyText;
    src: url("$lib/spookyFont.otf");
  }
  .spookyText {
    font-family: spookyText;
  }
  .cursor {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    /* position: fixed; */
    /* pointer-events: none; */
    /* z-index: 9999; */
  }
</style>
 -->

<!-- </div> -->

<style>
  :global(body) {
    background: url("$lib/assets/interior.jpeg");
    background-size: cover;
  }
  /* .container {
    display: block;
  } */
  .cursor {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
