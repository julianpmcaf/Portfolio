<script>
    import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
    import { createForm } from 'svelte-forms-lib'
    import axios from 'axios';

    const {form, handleSubmit} = createForm({
        initialValues:{
            name: "",
            email: "",
            message: ""
        },
        validate: values =>{
            console.log(values)
            const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            let errs = {};
            if (!values.name){
                errs["name"] = "Empty name"
                toasts.error("You must provide a name")
            } 
            else if (!values.email){
                errs["email"] = "Empty email"
                toasts.error("You must provide an email")
            }
            else if(!regex.test(values.email)){
                errs["name"] = "Invlid Email"
                toasts.error("Invalid email")
            }
            return errs
        },
        onSubmit: async values =>{
            let res = await axios.post('/api/contact', {email: values.email, name: values.name, message: values.message})
            if (res.data.status != 200){
                toasts.error("Error sending email")
                console.error(res.data)
            }
            else{
                toasts.success("Your message has been successfully sent!")
            }
        }
    })
</script>

    <div class="main w-4/5 mx-auto cursor-default min-h-screen">
        <h1 class="text-6xl font-bold mt-14 sm:mt-40">Contact</h1>
        <form method="POST" class="flex flex-col mt-10 gap-10" on:submit={handleSubmit}>
            <div class="grid sm:grid-cols-2 gap-10">
                <div class="flex flex-col gap-2">
                    <label for="name">
                        Name
                    </label>
                    <input id="name" name="name" bind:value={$form.name}  type="text" class=" border-2 border-black h-10 pl-2">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">
                        Email
                    </label>
                    <input id="email" name="email"  bind:value={$form.email} type="email" class=" border-2 border-black h-10 pl-2" >
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <label for="message">
                    Message
                </label>
                <textarea id="message" bind:value={$form.message} name="message" class=" border-2 border-black h-60 pl-2"/>
            </div>

            <button class=" text-white bg-black w-3/6 sm:w-1/6 mx-auto py-2 focus:bg-white focus:text-black focus:border-2 focus:border-black mb-10"       
                    >Send</button>
        </form>
        
        <ToastContainer placement="bottom-center" let:data>
            <FlatToast {data} />
        </ToastContainer>

    </div>
