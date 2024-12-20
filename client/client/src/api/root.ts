import axios from "axios"

import { url } from "./url"

export async function root() {
  try {
    const response = await axios
      .get(url)
      .then((response) => {
        // manipula o sucesso da requisição
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message)
        }
        console.log(error.config)
      })
    console.log(response)
    return { response }
  } catch (e) {
    console.log(e)
  }
}
