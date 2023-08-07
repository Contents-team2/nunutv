//get firebase rdb

import axios from "axios"

const useGetRequest = (url, config) => {

    axios.get(url, config)
}
const usePostRequest = () => { }
const usePutRequest = () => { }
const usePatchRequest = () => { }
const useDeleteRequest = () => { }

export { useGetRequest, usePostRequest, usePatchRequest, usePutRequest, useDeleteRequest }