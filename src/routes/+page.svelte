<script>
    import { spring } from 'svelte/motion';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
    import { fade } from 'svelte/transition';
    import Collapsible from '../components/collapsible.svelte';
    import Cursor from '../components/cursor.svelte';
    let text;
    let tabs = {1: false, 2: false, 3:false}
</script>


    <Cursor text={text}>
        <div class=" flex justify-center h-fit  py-[75%] sm:py-[20%] 2xl:py-[25%] 3xl:py-[15%] items-center flex-col" >
            <div class=" text-white font-bold text-6xl w-fit" >
                <p bind:this={text}>and this is my portfolio.</p>
            </div>

            <div class="py-[104.5%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
                <div class="border-2 border-white border-b-0">
                    <Collapsible color="white" bind:open={tabs[1]}>
                        <h1 slot="title">Any certifications?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>Co-Founded a SaaS startup that generated 20,000+</li>
                            <li>In my company I worked on projects for clients such as the University of Twente, Mozo, and Q-NECC</li>
                            <li>Began programming at 16 where I generated 2,000+ monthly doing blockchain development work.</li>
                        </ul>
                    </Collapsible>
                    <Collapsible color="white" bind:open={tabs[2]}>
                        <h1 slot="title">Have you done any volunteering?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>For one school year I was a student mentor helping new computer science students get adjusted to life in Amsterdam as well with help with there studies.</li>
                        </ul>
                    </Collapsible>
                    <Collapsible color="white" bind:open={tabs[3]}>
                        <h1 slot="title">Any education?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>Currently studying Computer Science at the Vrije Universiteit van Amsterdam</li>
                            <li>Minor in managing digital innovation</li>
                        </ul>
                    </Collapsible>
                </div>
            </div>
        </div>
    </Cursor>
    <div class="flex h-fit w-full items-center py-[75%] sm:py-[20%] 2xl:py-[25%] 3xl:py-[15%] flex-col ">
        <div class=" font-bold text-6xl ">
            <p>Hi, i'm Julian</p>
        </div>
        <!-- {#if y < 10}
            <div class=" absolute bottom-10 animate-bounce" in:fade out:fade>
                    <Fa icon={faArrowDown} pull="right" size="lg"/>
            </div>
        {/if} -->
        <div class="py-[120%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
            <div class="border-2 border-black border-b-0">
                <Collapsible color="black" open={tabs[1]}>
                    <h1 slot="title">Any certifications or prior expierience?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                        <li>Co-Founded a SaaS startup that generated 20,000+</li>
                        <li>In my company I worked on projects for clients such as the University of Twente, Mozo, and Q-NECC</li>
                        <li>Began programming at 16 where I generated 2,000+ monthly doing blockchain development work.</li>
                    </ul>
                </Collapsible>
                <Collapsible color="black" open={tabs[2]}>
                    <h1 slot="title">Have you done any volunteering?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                        <li>For one school year I was a student mentor helping new computer science students get adjusted to life in Amsterdam as well with help with there studies.</li>
                    </ul>
                </Collapsible>
                <Collapsible color="black" bind:open={tabs[3]}>
                    <h1 slot="title">Any education?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                        <li>Currently studying Computer Science at the Vrije Universiteit van Amsterdam</li>
                        <li>Minor in managing digital innovation</li>
                    </ul>
                </Collapsible>
            </div>
        </div>
    </div>



