import { fail } from '@sveltejs/kit';
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");

         // Make Api Request
        if (!name) {
            return fail(400, { name, missing: true });
        } else if (!email) {
            return fail(400, { email, missing: true });
        } else if (regex.test(email.toString())) {
            return fail(400, { email, incorrect: true });
        }
        else {
            return { success: true };
        }
       
    }
};
