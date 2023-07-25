<script>
    import { spring } from 'svelte/motion';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
    import { fade } from 'svelte/transition';
    import Collapsible from '../components/collapsible.svelte';
    let text;

    let tabs = {1: false, 2: false}
    let y = 0;

    let m = spring({y: 0, x: 0}, {
		stiffness: 0.1,
		damping: 0.25
	});
    let size = spring(50);

    function  handleMousemove(event){
        if (
            text.getBoundingClientRect().y + window.scrollY > $m.y - 50 && 
            text.getBoundingClientRect().y + window.scrollY < $m.y + text.clientHeight + 50 && 
            text.getBoundingClientRect().x + window.scrollX < $m.x + 50 &&
            text.getBoundingClientRect().x + window.scrollX > $m.x - text.clientWidth - 50
        ){
            size.set(100)
        }
        else{
            size.set(50)
        }
        $m.x = event.pageX;
        $m.y = event.pageY - 75 ;
    }
</script>

<svelte:window on:mousemove={handleMousemove} bind:scrollY={y}/>

<div class="cursor-none">
    <div class="flex absolute bg-purple-500 z-10 justify-center h-fit w-full py-[75%] sm:py-[20%] 2xl:py-[25%] 3xl:py-[15%] items-center flex-col"  style="clip-path: circle({$size}px at {$m.x}px {$m.y}px);">
        <div class=" text-white font-bold text-6xl w-fit" >
            <p bind:this={text}>and this is my portfolio.</p>
        </div>

        <div class="py-[104.5%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
            <div class="border-2 border-white border-b-0">
                <Collapsible color="white" bind:open={tabs[1]}>
                    <h1 slot="title">Any education or certifications?</h1>
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
            </div>
        </div>
        
    </div>
    <div class="flex h-fit w-full items-center py-[75%] sm:py-[20%] 2xl:py-[25%] 3xl:py-[15%] flex-col ">
        <div class=" font-bold text-6xl ">
            <p>Hi, i'm Julian</p>
        </div>
        {#if y < 10}
            <div class=" absolute bottom-10 animate-bounce" in:fade out:fade>
                    <Fa icon={faArrowDown} pull="right" size="lg"/>
            </div>
        {/if}
        <div class="py-[120%] sm:py-[50%] 2xl:py-[45%] 3xl:py-[30%] w-4/5 lg:w-2/5" >
            <div class="border-2 border-black border-b-0">
                <Collapsible color="black" open={tabs[1]}>
                    <h1 slot="title">Any education or certifications?</h1>
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
            </div>
        </div>
    </div>
</div>


