

<script>
    import { spring } from 'svelte/motion';

    let text;
    let m = spring({y: 0, x: 0}, {
		stiffness: 0.1,
		damping: 0.25
	});
    let size = spring(50);

    function  handleMousemove(event){
        if (
            text.getBoundingClientRect().y + window.scrollY > $m.y - 50 || 
            text.getBoundingClientRect().y + window.scrollY + text.clientHeight > $m.y + 50 && 
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

<svelte:window on:mousemove={handleMousemove}  />
<div class="absolute bg-purple-500 z-10  w-full" style="clip-path: circle({$size}px at {$m.x}px {$m.y}px)" >
    <div bind:this={text}>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen">
            <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto ">
                <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
              <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                 <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                  <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                  <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                  <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                 <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                 <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
            <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                 <img src="ainsley.jpeg" class="w-full h-full invert object-cover" alt="ainsley">
            </div>
        </div>
    </div>
</div>
    
<div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen ">
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5 ">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2 border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
        <div class="border-2 border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2 border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
    <div class="border-2  border-black p-5 w-80 sm:w-96 h-96 mx-auto">
        <h1 class="font-bold text-6xl mb-5">A New Look on Cloud Computing</h1>
        <p>This project consisted of building a mega super ultra computer to calculate some server stuff</p>
    </div>
</div>