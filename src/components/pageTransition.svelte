        
<script>
    import { fly } from 'svelte/transition'
    export let key = '';
</script>
{#key key}
    <div
        in:fly={{ y: -200, duration: 300, delay: 300 }}
        out:fly={{ y: 200, duration: 300 }}
    >
        <slot/>
    </div>
{/key}