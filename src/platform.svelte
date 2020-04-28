<script>
  import Nav from "./components/nav.svelte";
  import { selectedstore } from "./main.js";
  import Dash from "./components/dash.svelte";
  import Sess from "./components/sess.svelte";
  import Wall from "./components/wall.svelte";
  import Connect from "./components/connect.svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<style>
  .hidescroll::-webkit-scrollbar {
    width: 0 !important;
  }
</style>

<div
  style="height:100vh; width:100vw;"
  class="overflow-scroll hidescroll"
  in:fade>
  {#if $selectedstore == 'dash'}
    <Dash />
  {:else if $selectedstore == 'sess'}
    <Sess />
  {:else if $selectedstore == 'wall'}
    <Wall />
  {:else if $selectedstore == 'connect'}
    <Connect />
  {/if}

</div>

<div class="overflow-hidden" in:fade>
  <Nav />
</div>
