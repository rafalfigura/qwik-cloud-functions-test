import {server$} from "@builder.io/qwik-city";
import {Subject} from "~/server/types";


export const getSignedImageUrl = server$(async function (imageSubject: Subject, imageName: string) {
    console.log(`Server: getSignedImageUrl: `, {imageSubject, imageName})
    return {
        signedUrl: `ServerResponse: ${imageSubject}/${imageName}`,
        filePath: ''
    }
})