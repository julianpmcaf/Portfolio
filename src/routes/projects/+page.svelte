

<script>
    import Cursor from '../../components/cursor.svelte';
    let text;

</script>

<Cursor text={text}>       
        <div  class="">
            <div bind:this={text} class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen ">
                <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto ">
                    <img src="destination.png" class="w-full h-full object-contain" alt="ainsley">
                </div>
                <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                <img src="jobFinder.png" class="w-full h-full object-contain" alt="ainsley">
                </div>
                
            </div>
        </div>
</Cursor> 
    
<div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen ">
    <div class="border-2  border-black  w-80 sm:w-96 h-96 mx-auto relative">
        <h1 class="font-bold text-6xl mb-5 px-5 pt-5">Destination IOS</h1>
        <p class="p-5">A fun IOS app to book and handle airline tickets.</p>
        <div class="border-t-2 border-black h-14  bottom-0 w-full absolute flex"> 
            <div class="w-1/3 border-r-2 border-black h-full">
                <p class="text-center font-semibold">Status</p>
                <p class="text-center text-yellow-400">In-Progress</p>
            </div>
            <div class="w-1/3 border-r-2 border-black h-full">
                <p class="text-center font-semibold">Framework</p>
                <p class="text-center">React.js</p>
            </div>
            <div class="w-1/3  h-full">
                <p class="text-center font-semibold">Language</p>
                <p class="text-center">HTML/JS</p>
            </div>
        </div>
    </div>
    <div class="border-2  border-black  w-80 sm:w-96 h-96 mx-auto relative">
        <h1 class="font-bold text-6xl mb-5 px-5 pt-5">Job Finder Website</h1>
        <p class="p-5">A website to post jobs for thers to apply for.</p>
        <div class="border-t-2 border-black h-14  bottom-0 w-full absolute flex"> 
            <div class="w-1/3 border-r-2 border-black h-full">
                <p class="text-center font-semibold">Status</p>
                <p class="text-center text-yellow-400">In-Progress</p>
            </div>
            <div class="w-1/3 border-r-2 border-black h-full">
                <p class="text-center font-semibold">Framework</p>
                <p class="text-center">SwiftUI</p>
            </div>
            <div class="w-1/3  h-full">
                <p class="text-center font-semibold">Language</p>
                <p class="text-center">Swift</p>
            </div>
        </div>
    </div>
    
</div>