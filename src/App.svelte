<script>
  import Website from './website.svelte';
  import Platform from './platform.svelte';
  import {firebase} from './main.js';
  import { FirebaseApp, User } from 'sveltefire';
</script>

<style lang="text/postcss">

</style>

<FirebaseApp {firebase}>

    <User let:user let:auth log>

        <Platform />

        <div slot="signed-out">
            <Website />
        </div>

    </User>

</FirebaseApp>

<!-- <Platform /> -->