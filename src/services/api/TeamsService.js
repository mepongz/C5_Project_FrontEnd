import api from '../axios'

async function getTeams() {
    const response = await api.get(`/api/teams`).catch((err) => {
      console.log(err)
    })
    return response
}

const modules = {
	getTeams,
}

export default modules
