import { sendEmail } from "../../../server/utils"
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const controller = new AbortController
    const data = await request.json()
    const message = data.message
    const email = data.email
    const name = data.name
    const res = await sendEmail(controller.signal, email, name, message)
    return json({status: res.status, data: res.data})
}