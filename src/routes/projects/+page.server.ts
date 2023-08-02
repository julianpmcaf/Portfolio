/** @type {import('./$types').PageServerLoad} */
import { getRepositories } from '../../server/utils.js';
export async function load({ params }) {
    let controller = new AbortController()
    let response = await getRepositories(controller.signal)
    let data = response.data.filter((element) => element.owner.login === 'julianpmcaf')
    return {
        repos: data,

    };
}
