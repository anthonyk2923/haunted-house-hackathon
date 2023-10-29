import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("mousemove", (event) => {
      const cursor = document.getElementById("cursor");
      console.log(event.clientX + "x" + event.clientY);
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
  });
</script>

<div class="container">
  <div
    style={`left: ${event.clientX}px, top: ${event.clientY}px`}
    class="cursor"
    id="cursor"
  />
</div>

<style>
  :global(body) {
    background-color: rgba(0, 100, 255, 0.9);
  }
  .container {
    display: block;
    background-color: rgba(0, 100, 255, 0.9);
  }
  .cursor {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
