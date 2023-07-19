
<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
    import { slide } from 'svelte/transition';

    export let open = false;
    export let color;

</script>


<div class="min-h-[3rem] mx-auto  border-b-2 border-{color} flex " on:mouseover = {() => open = true} on:mouseleave={() => open = false} >
    <div class="flex w-10/12 sm:w-11/12 m-auto" >
        <div class="w-3/4 m-auto">
            <h1 class="font-bold text-{color}"><slot name="title"/></h1>
        </div>
        <div class="w-1/4 m-auto">
            <Fa icon={faAngleDown} pull="right" color ={color} size="lg"/>
        </div>
    </div>
</div>
{#if open}
    <div class="h-fit mx-auto  border-b-2 border-{color}" transition:slide|local>
        <div class="w-10/12 sm:w-11/12  m-auto">
            <slot name="description"/>
            <!-- <ul class=" list-disc list-outside py-4 text-white">
                <li>Co-Founded a SaaS startup that generated 20,000+</li>
                <li>In my company I worked on projects for clients such as the University of Twente, Mozo, and Q-NECC</li>
                <li>Began programming at 16 where I generated 2,000+ monthly doing blockchain development work.</li>
            </ul> -->
        </div>
    </div>
{/if}