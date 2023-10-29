<script>
  import keysImg from "$lib/assets/keys.png";
  import background from "$lib/assets/lm,ao.jpeg";
  function toBlack() {
    document.body.style.background = "black";
    document.getElementsByClassName("hideClass").style.display = "none";
  }
  function toOrginal() {
    document.body.style.background = "url(" + background + ")";
    document.body.style.backgroundSize = "cover";
  }
</script>

<div id="hideClass">
  <br />
  <br />
  <h1 align="center" class="spookyText text-purple-800 text-9xl">
    Welcome to our room!
  </h1>
  <hr class="border border-cyan-400" />
  <div class="flow-root">
    <div class="pl-4 pt-8">
      <p class="spookyText text-red-800 text-4xl float-left" align="left">
        In this room your goal is to find the golden key <br /> in each level,
        there are 3 levels and each level is harder <br /> than the last. But
        don't take too long because <br /> ghosts and monsters will try and catch
        you.
      </p>
    </div>
    <img class="float-right mb-32" src={keysImg} alt="" />
    <div class="flex-div">
      <h4 class="spookyText float-left pl-4 pt-4 text-purple-800 text-4xl">
        Think you're up for the challange?
      </h4>
      <a
        align="center"
        on:mouseenter={toBlack}
        on:mouseleave={toOrginal}
        class="spookyText float-left pl-4 pt-4 text-4xl text-blue-400 hover:border-4 hover:border-black hover:bg-gradient-to-r from-red-800 to-stone-900 rounded-full border-black hover:text-white hover:text-opacity-75"
        id="begin-btn"
        href="/first"
      >
        lets Begin</a
      >
    </div>
  </div>
</div>

<!-- .spookyText {
    font-family: spookyText;
  }

  #begin-button:hover {
    transform: scale(1.65);
    transition: transform 5s;
  }
</style> -->

<style>
  :global(body) {
    background-image: url("$lib/assets/lm,ao.jpeg");
    background-size: cover;
  }

  @font-face {
    font-family: spookyText;
    src: url("$lib/spookyFont.otf");
  }
  .spookyText {
    font-family: spookyText;
  }
  .toHide {
    display: none;
  }
  .flex-div {
    display: inline;
  }
  #begin-btn:hover {
    border-radius: 50px;
    padding: 10px;
  }
  cursor {
    display: none;
  }
</style>
