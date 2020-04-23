<script>
  import Website from './website.svelte';
  import Platform from './platform.svelte';
  import {firebase} from './main.js';
  import { FirebaseApp, User } from 'sveltefire';
</script>

<style lang="text/postcss">

</style>

<FirebaseApp {firebase}>

    <!-- 2. 😀 Get the current user -->
    <User let:user let:auth log>

        <Platform />

        <div slot="signed-out">
            <Website />
        </div>

    </User>

</FirebaseApp>