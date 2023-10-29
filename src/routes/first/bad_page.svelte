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
