import api from '../axios'

async function getPlayers({search}) {
    const response = await api.get(`/api/players?search=${search}`).catch((err) => {
      console.log(err)
    })
    return response
}

const modules = {
	getPlayers,
}

export default modules
