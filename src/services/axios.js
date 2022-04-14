import axios from "axios"

export const ACCESS_TOKEN = "c5_access_token"

const api = axios.create({
	baseURL: `${process.env.REACT_APP_API_SERVER}`,
	headers: {
		"Content-type": "application/json"
	}
})


export default api