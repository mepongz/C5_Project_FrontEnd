import api, {apiUrlEncodedContentType} from '../axios'
import { populateUrlEncodedFormData } from '../../app/utils/data-helper'

async function getPlayers({search, sort_by, sort_column}) {
    const response = await api.get(`/api/players?search=${search}&sort_by=${sort_by}&sort_column=${sort_column}`).catch((err) => {
      console.log(err)
    })
    return response
}

async function putPlayer(data) {
  const response = await apiUrlEncodedContentType
    .put(`/api/players/${data?.id}`, populateUrlEncodedFormData(data))
    .catch((err) => {
      console.log(err)
    })
  return response
}

const modules = {
	getPlayers,
  putPlayer
}

export default modules
