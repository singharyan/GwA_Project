<script>
    import {fly,fade} from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Carousel from '@beyonk/svelte-carousel';
    // import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';

    let sessions=[
        {title:"How to Grow with Aryan",src:"image.jpg", rec:true},
        {title:"How to Grow with Aryan",src:"image.jpg", rec:true},
        {title:"How to Grow with Aryan",src:"image.jpg", rec:true},
        {title:"How to Grow with Aryan",src:"image.jpg", rec:true},
        {title:"How to Grow with Aryan",src:"image.jpg", rec:true},
    ];
</script>

<style>
    .hidescroll::-webkit-scrollbar { width: 0 !important }

    .shadow1{
		box-shadow: 0px 7px 20px rgba(124, 124, 124, 0.173)
	}
</style>

<!-- head  -->
<div class="absolute mt-6 ml-6 rounded-xl py-1 px-3 flex items-center max-w-sm shadow1 overflow-hidden z-40" style="backdrop-filter: blur(10px); background-color: rgba(255,255,255,0.93);" in:fly="{{duration: 250, x: -500, opacity: 0.5, easing: quintOut}}">
    <img class="w-1/2 mx-auto flex-shrink z-20" alt="grow with aryan logo" src="gwa-sm.svg" in:fade="{{duration: 150}}"/>
    <p class="font-medium text-center text-gray-500 font-semibold text-xl mr-3 z-40" in:fade="{{duration: 150}}"> Sessions </p>
</div>

<div class="mt-32 w-11/12 md:w-4/5 mx-auto mt-6 rounded-2xl overflow-hidden" in:fly="{{duration: 250, y: 80, opacity: 0.5, easing: quintOut}}"> 
    <Carousel perPage={{ 800: 3, 500: 2 }} autoplay={2000}>
        <!-- <span class="control z-0" slot="left-control" in:fade="{{duration: 150}}">
            <ChevronLeftIcon />
        </span> -->
        {#each sessions as sess}
            {#if sess.rec==true}
                <div class="w-full mx-auto px-4 rounded-xl"  on:click="{()=>{alert('video-redirect');}}" in:fade="{{duration: 150}}">
                    <img src="{sess.src}" class="rounded-xl mx-auto w-full shadow-md hover:shadow-lg" alt="" in:fade="{{duration: 150}}"/>
                </div>
            {/if}
        {/each}
            <!-- <span class="control z-0" slot="right-control" in:fade="{{duration: 150}}">
                <ChevronRightIcon />
            </span> -->
    </Carousel>
</div>


<p class="font-semibold w-11/12 md:w-2/3 mx-auto text-base md:text-lg text-gray-600 pl-6 mt-8" in:fly="{{duration: 250, y: -20, opacity: 0.5, easing: quintOut}}">Sessions</p>
<!-- Sessions -->
<div class="w-11/12 md:w-5/6 lg:w-3/5 mt-4 flex flex-wrap mx-auto hidescroll justify-center" in:fly="{{duration: 250, y: 80, opacity: 0.5, easing: quintOut}}">
    {#each sessions as sess}
        <div class="w-1/2 md:w-1/3 p-1 md:p-2" in:fade="{{duration: 150}}">
            <img src="{sess.src}" class="m-auto rounded-full bg-gray-100 w-full rounded-xl p-2" alt="{sess.title}" in:fade="{{duration: 150}}"/>
        </div>
        <!-- <img src="image.jpg" class="rounded-full bg-gray-100 rounded-xl w-2/5 p-3" alt=""/>
        <img src="image.jpg" class="rounded-full bg-gray-100 rounded-xl w-2/5 p-3" alt=""/>
        <img src="image.jpg" class="rounded-full bg-gray-100 rounded-xl w-2/5 p-3" alt=""/>
        <img src="image.jpg" class="rounded-full bg-gray-100 rounded-xl w-2/5 p-3" alt=""/> -->
    {/each}
</div>

<p class="font-medium block text-center mx-auto text-xs md:text-sm text-gray-500 mt-3 mb-32" in:fade="{{duration: 150}}">More in the making</p>
