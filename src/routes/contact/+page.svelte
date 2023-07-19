<script>
    import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
    import { page } from '$app/stores';
    /** @type {import('./$types').ActionData} */
    export let form;

    $: $page.status === 400 ? validateResponse() : null;

    function validateResponse(){
        if (form?.missing === true){
            toasts.error("Error", "Name and email are required");
        }
        else if (form?.incorrect === true){
            toasts.error("Error", "Incorrect Email");
        }
        else if (form?.success === true){
            toasts.success("Message Sent", "I will get back to you shortly!");
        }
    }
</script>
    <div class="main w-4/5 mx-auto cursor-default min-h-screen">
        <h1 class="text-6xl font-bold mt-14 sm:mt-40">Contact</h1>
        <form method="POST" class="flex flex-col mt-10 gap-10" >
            <div class="grid sm:grid-cols-2 gap-10">
                <div class="flex flex-col gap-2">
                    <label for="name">
                        Name
                    </label>
                    <input name="name" type="text" class=" border-2 border-black h-10">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">
                        Email
                    </label>
                    <input name="email" type="email" class=" border-2 border-black h-10" >
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="message">
                    Message
                </label>
                <textarea name="message" class=" border-2 border-black h-60"/>
            </div>
            
            <button class="text-white bg-black w-3/6 sm:w-1/6 mx-auto py-2 focus:bg-white focus:text-black focus:border-2 focus:border-black mb-10" on:click={validateResponse}>Send</button>
        </form>
        
        <ToastContainer placement="bottom-center" let:data>
            <FlatToast {data} />
        </ToastContainer>

    </div>
