

<script>
    
    import Cursor from '../../components/cursor.svelte';
    let text;
    export let data;
</script>

<Cursor text={text}>       
        <div  class="">
            <div bind:this={text} class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen ">
                {#each data.repos as repo}
                    <a href={repo.html_url} target="_blank">
                        <div class="border-2 border-white p-5 w-80 sm:w-96 h-96 mx-auto ">
                            <!-- <img src="destination.png" class="w-full h-full object-contain" alt="project"> -->
                            <h1 class="font-bold text-6xl text-white">View Repository</h1>
                        </div>
                    </a>
                {/each}
                <!-- 
                <div class="border-2  border-white p-5 w-80 sm:w-96 h-96 mx-auto">
                    <img src="jobFinder.png" class="w-full h-full object-contain" alt="project">
                </div> -->
            </div>
        </div>
</Cursor> 
    
<div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 main py-10 min-h-screen ">
    {#each data.repos as repo}
            <div class="border-2  border-black  w-80 sm:w-96 h-96 mx-auto relative overflow-hidden">
                <h1 class="font-bold text-6xl mb-5 px-5 pt-5">{repo.name}</h1>
                <p class="p-5">{repo.description}</p>
                <div class="border-t-2 border-black h-14  bottom-0 w-full absolute flex"> 
                    <div class="w-1/3 border-r-2 border-black h-full text-center">
                        <p class=" font-semibold">Status</p>
                        <p class=" text-yellow-400">In-Progress</p>
                    </div>
                    <div class="w-1/3 border-r-2 border-black h-full text-center">
                        <p class=" font-semibold">Visibility</p>
                        <p>{repo.visibility}</p>
                    </div>
                    <div class="w-1/3  h-full text-center">
                        <p class=" font-semibold">Language</p>
                        <p>{repo.language}</p>
                    </div>
                </div>
            </div>
    {/each}
</div>