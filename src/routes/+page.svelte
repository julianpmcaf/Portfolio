<script>
    import { spring } from 'svelte/motion';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
    import { fade } from 'svelte/transition';
    import Collapsible from '../components/collapsible.svelte';
    import Cursor from '../components/cursor.svelte';
    let text;
    let tabs = {1: false, 2: false, 3:false, 4:false}
    let screenSize;
    let y;
</script>


    <Cursor text={text} bind:screenSize={screenSize} bind:y={y}>
        <div class=" flex justify-center h-fit  py-[75%] sm:py-[20%] 2xl:py-[25%] 3xl:py-[15%] items-center flex-col" >
            <div class=" text-white font-bold text-6xl w-fit" >
                <p bind:this={text}>and this is my portfolio.</p>
            </div>

            <div class="py-[104.5%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
                <div class="border-2 border-white border-b-0">
                    <Collapsible color="white" bind:open={tabs[1]}>
                        <h1 slot="title">Who am I?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>Born and raised in Florida, USA until I was 14</li>
                            <li>Moved to the Netherlands with my family to continue our lives here</li>
                            <li>My father is from Suriname and my mom is Dutch</li>
                            <li>I enjoy watching NBA, skateboarding, and getting in a nice workout</li>
                        </ul>
                    </Collapsible>
                    <Collapsible color="white" bind:open={tabs[2]}>
                        <h1 slot="title">Any prior expierience or certifications?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>Worked as a full-stack & mobile developer at a SaaS startup helping generate €20,000+</li>
                            <li>Developed for clients such as the University of Twente, Mozo, and Q-NECC</li>
                            <li>Solved website bugs as a frontend developer for Growth Tribe</li>
                            <li>Began programming at 16 where I generated €2,000+ monthly doing blockchain development work.</li>
                        </ul>
                    </Collapsible>
                    <Collapsible color="white" bind:open={tabs[3]}>
                        <h1 slot="title">Have you done any volunteering?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>I volunteered as a student mentor for incoming computer science student where I oversaw their introduction to the VU computerscience facilities and faculty for a year.</li>
                        </ul>
                    </Collapsible>
                    <Collapsible color="white" bind:open={tabs[4]}>
                        <h1 slot="title">Do you have any education?</h1>
                        <ul class=" list-disc list-outside py-4 text-white" slot="description">
                            <li>Currently studying Computer Science at the Vrije Universiteit van Amsterdam</li>
                            <li>Minor in managing digital innovation</li>
                            <li>Certification in AI from the University of Helsinki</li>
                            <li>Currently studying for the AWS solutions architect certification</li>
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
        {#if screenSize < 650 && y < 10}
            <div class=" absolute bottom-10 animate-bounce" in:fade out:fade>
                    <Fa icon={faArrowDown} pull="right" size="lg"/>
            </div>
        {/if}
        <div class="py-[120%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
            <div class="border-2 border-black border-b-0">
                <Collapsible color="black" bind:open={tabs[1]}>
                        <h1 slot="title">Who am I?</h1>
                        <ul class=" list-disc list-outside py-4 " slot="description">
                            <li>Born and raised in Florida, USA until I was 14</li>
                            <li>Moved to the Netherlands with my family to continue our lives here</li>
                            <li>My father is from Suriname and my mom is Dutch</li>
                            <li>I enjoy watching NBA, skateboarding, and getting in a nice workout</li>
                        </ul>
                </Collapsible>
                <Collapsible color="black" open={tabs[2]}>
                    <h1 slot="title">Any prior expierience or certifications?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                            <li>Worked as a full-stack & mobile developer at a SaaS startup helping generate €20,000+</li>
                            <li>Developed for clients such as the University of Twente, Mozo, and Q-NECC</li>
                            <li>Solved website bugs as a frontend developer for Growth Tribe</li>
                            <li>Began programming at 16 where I generated €2,000+ monthly doing blockchain development work.</li>
                    </ul>
                </Collapsible>
                <Collapsible color="black" open={tabs[3]}>
                    <h1 slot="title">Have you done any volunteering?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                        <li>I volunteered as a student mentor for incoming computer science student where I oversaw their introduction to the VU computer science facilities and faculty for a year.</li>
                    </ul>
                </Collapsible>
                <Collapsible color="black" bind:open={tabs[4]}>
                    <h1 slot="title">Do you have any education?</h1>
                    <ul class=" list-disc list-outside py-4 text-black" slot="description">
                            <li>Currently studying Computer Science at the Vrije Universiteit van Amsterdam</li>
                            <li>Minor in managing digital innovation</li>
                            <li>Certification in AI from the University of Helsinki</li>
                            <li>Currently studying for the AWS solutions architect certification</li>
                    </ul>
                </Collapsible>
            </div>
        </div>
    </div>



