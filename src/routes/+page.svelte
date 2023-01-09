<script lang="ts">
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';
    export let form: ActionData;
</script>

<form use:enhance method="POST">
    <input type="text" name="first" value={form?.first ?? ''} placeholder="first" />
    <input type="text" name="last" value={form?.last ?? ''} placeholder="last" />
    <input type="submit" />
</form>

{form?.first}
{form?.last}
