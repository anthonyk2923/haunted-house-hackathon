<script>
  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("mousemove", (event) => {
      const cursor = document.querySelector("cursor");
      console.log(event.clientX + "x" + event.clientY);
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

<!-- <script>
  document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
    cursor.style.cursor = " none";
  });

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

<a href="/first" class="text-9xl text-red-400"> RELOAD</a>
<div class="cursor">
 -->