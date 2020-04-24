<script>
    import {fly,fade} from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import {socialstore} from '../main.js';
</script>

<style>
    .shadow1{
		box-shadow: 0px 7px 20px rgba(124, 124, 124, 0.173)
	}
</style>

<!-- head -->
<div class="absolute mt-6 ml-6 rounded-xl py-1 px-3 flex items-center max-w-sm shadow1 overflow-hidden" style="backdrop-filter: blur(10px); background-color: rgba(255,255,255,0.93);" in:fly="{{duration: 250, x: -500, opacity: 0.5, easing: quintOut}}">
    <img class="w-1/2 mx-auto flex-shrink z-20" alt="grow with aryan logo" src="gwa-sm.svg" in:fade="{{duration: 150}}"/>
    <p class="font-medium text-center text-gray-500 font-semibold text-xl mr-3 z-20" in:fade="{{duration: 150}}"> Social</p>
</div>

<!-- posts -->
<div class="mt-32 mx-auto w-11/12 md:w-5/6 md:flex md:flex-wrap justify-center items-center pb-32" >
    {#each $socialstore as post}
    <div class="w-full md:w-1/2 lg:w-1/3 p-3 pb-0" in:fly="{{duration: 250, y: 500, opacity: 0.5, easing: quintOut}}">
        <div class="mx-auto m-4 rounded-xl rounded-b-2xl pt-2 pb-0 overflow-hidden bg-white shadow1" in:fade="{{duration: 150}}">
            <p class="text-gray-600 text-base font-semibold mt-2 ml-4">{post.title}</p>
            <p class="text-gray-600 text-sm text-center font-medium mt-2">{post.description}</p>
            <img class="mx-auto w-full mt-3 rounded-xl rounded-b-0" alt="{post.title} mt-2" src="{post.src}"/>
        </div>
    </div>
    {/each}
</div>