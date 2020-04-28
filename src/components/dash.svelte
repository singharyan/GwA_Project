<script>
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<style>
  /* button:focus {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    } */
  .hidescroll::-webkit-scrollbar {
    width: 0 !important;
  }
</style>

<div
  class="flex items-center w-5/6 md:w-1/2 lg:w-1/3 mt-12 mx-auto"
  in:fade={{ duration: 150 }}>
  <!-- Profile Header -->
  <div class="w-1/3" in:fly={{ duration: 250, x: -100, easing: quintOut }}>
    <img
      class="rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto"
      src="photo.png"
      alt="profie_picture" />
  </div>
  <div class="w-2/3">
    <p
      class="font-extrabold text-xl md:text-2xl text-gray-700 ml-1"
      in:fly={{ duration: 250, y: -80, opacity: 0.5, easing: quintOut }}>
      Smart Guy
    </p>
    <div
      class="flex items-center"
      in:fly={{ duration: 250, y: -80, opacity: 0.5, easing: quintOut }}>
      <p
        class="font-bold text-base md:text-xl text-gray-700 ml-2"
        in:fly={{ duration: 250, x: -80, opacity: 0.5, easing: quintOut }}>
        Level 0
      </p>
      <p
        class="font-extrabold text-xs md:text-sm text-asiotcolor uppercase ml-1
        bg-gray-200 rounded-full px-2 my-1"
        in:fly={{ duration: 250, x: 80, opacity: 0.5, easing: quintOut }}>
        novice
      </p>
    </div>
    <div
      class="mt-1 h-7 w-full border-4 border-gray-400 py-1 px-1 rounded-full"
      in:fly={{ duration: 250, y: 80, opacity: 0.5, easing: quintOut }}>
      <div
        class="bg-asiotcolor my-auto rounded-full h-4"
        style="width:10%;"
        in:fade={{ duration: 150 }} />
    </div>
  </div>
</div>

<!-- TODO -->
<p
  class="font-bold w-5/6 md:w-1/2 lg:w-1/3 mx-auto text-base md:text-lg
  text-gray-700 pl-4 mt-8 md:mt-10"
  in:fly={{ duration: 250, y: -20, opacity: 0.5, easing: quintOut }}>
  TODO
</p>
<div
  class="w-5/6 mx-auto md:w-1/2 lg:w-1/3 px-4 pb-6 pt-2 bg-gray-100 rounded-xl
  mt-1 overflow-scroll hidescroll"
  style="height: 50vh"
  in:fly={{ duration: 250, y: 80, opacity: 0.5, easing: quintOut }}>
  <div
    class="mx-auto flex items-center p-3 bg-white rounded-xl mt-2"
    in:fly={{ duration: 250, x: -80, opacity: 0.5, easing: quintOut }}>
    <div
      class="w-1/5"
      in:fly={{ duration: 250, y: -40, opacity: 0.5, easing: quintOut }}>
      <img
        class="p-2 m-auto h-12 md:h-16 w-12 md:w-16 rounded-lg bg-gray-100"
        style="opacity:0.7;"
        alt="todo"
        src="todo.svg" />
    </div>
    <div
      class="w-4/5 pl-3"
      in:fly={{ duration: 250, x: 100, opacity: 0.5, easing: quintOut }}>
      <p class="font-semibold text-base text-gray-500 line-through">
        Set-up your Profile
      </p>
      <p class="font-medium text-xs text-gray-500 line-through">
        Finish setting-up your profile
      </p>
    </div>
  </div>
  <div
    class="mx-auto flex items-center p-3 bg-white rounded-xl mt-4"
    in:fly={{ duration: 250, x: -80, opacity: 0.5, easing: quintOut }}>
    <div
      class="w-1/5"
      in:fly={{ duration: 250, y: -40, opacity: 0.5, easing: quintOut }}>
      <img
        class="p-3 m-auto h-12 md:h-16 w-12 md:w-16 rounded-lg bg-gray-100"
        alt="todo"
        src="vid.svg" />
    </div>
    <div
      class="w-4/5 pl-3"
      in:fly={{ duration: 250, x: 100, opacity: 0.5, easing: quintOut }}>
      <p class="font-semibold text-base text-gray-700">Watch Introductions</p>
      <p class="font-medium text-xs text-gray-700">
        See Intro to GwA videos in the Sessions section.
      </p>
    </div>
  </div>
</div>
