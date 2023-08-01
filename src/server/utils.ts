import axios from 'axios';
import { EMAIL_KEY, EMAIL_ENDPOINT } from '$env/static/private';
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
                    "email":"julianpm.caf@gmail.com",
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

