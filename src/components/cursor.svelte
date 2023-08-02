
<script>
    import { spring } from 'svelte/motion';

    export let text;
    export let y = 0;
    export let screenSize = 1920;

    let m = spring({y: 0, x: 0}, {
		stiffness: 0.1,
		damping: 0.25
	});
    let size = spring(50);

    function  handleMousemove(event){
        if (
            text.getBoundingClientRect().y + window.scrollY < $m.y + 50 && 
            text.getBoundingClientRect().y + window.scrollY + text.clientHeight > $m.y - 50 &&
            text.getBoundingClientRect().x + window.scrollX < $m.x + 50 &&
            text.getBoundingClientRect().x + window.scrollX > $m.x - text.clientWidth - 50
        ){
            size.set(100)
        }
        else{
            size.set(50)
        }
        $m.x = event.pageX ;
        $m.y = event.pageY - 75 ;
    }

</script>

<svelte:window on:mousemove={handleMousemove} bind:scrollY={y} bind:innerWidth={screenSize}/>

<div class="">
    <div class="absolute bg-purple-500 z-10  w-full" style="clip-path: circle({$size}px at {$m.x}px {$m.y}px)" >
        <slot/>
    </div>
</div>
