<script>
    import Nav from './components/nav.svelte';
    import {selectedstore} from './main.js';
    import Dash from './components/dash.svelte';
    import Sess from './components/sess.svelte';
    import Wall from './components/wall.svelte';
    import Connect from './components/connect.svelte';
    import {fade,fly} from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>


<div style="height:100vh" class="overflow-scroll">
    {#if $selectedstore=="dash"}
        <Dash></Dash>
    {:else if $selectedstore=="sess"}
        <Sess></Sess>
    {:else if $selectedstore=="wall"}
        <Wall></Wall>
    {:else if $selectedstore=="connect"}
        <Connect></Connect>
    {/if}

</div>

<div class="overflow-hidden" in:fade>
<Nav></Nav>
</div>