import axios from 'axios';
import { EMAIL_KEY, EMAIL_ENDPOINT, GH_TOKEN, EMAIL } from '$env/static/private';
export const sendEmail = (controller: AbortSignal, sender: FormDataEntryValue, name: FormDataEntryValue, message: FormDataEntryValue | null): any => 
    
    axios({
        method: 'post',
        headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
            "api-key": EMAIL_KEY
        },
        url: EMAIL_ENDPOINT,
        data: {
            "sender":{  
                "name":name,
                "email":sender
            },
            "to":[  
                {  
                    "email":EMAIL,
                    "name":"Julian Chin A Foeng"
                }
            ],
            "subject":"New Message from Portfolio",
            "htmlContent":message
        },
        signal: controller
    })
    .then(response => {
        return ({status: 200, data: response.data})
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            return ({status: 500, data: error.response})
        }
        else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return ({status: 504, data: error.response})
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return ({status: 500, data: error.response})
        }
    })

export const getRepositories = (controller: AbortSignal): any => 
    axios({
        method: 'get',
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization":"Bearer "+ GH_TOKEN,
            "X-GitHub-Api-Version":"2022-11-28"
        },
        url: 'https://api.github.com/user/repos',
        signal: controller
    }).then(response => {
        return ({status: 200, data: response.data})
    })
    .catch(error => {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            return ({status: 500, data: error.response})
        }
        else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return ({status: 504, data: error.response})
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return ({status: 500, data: error.response})
        }
    })

