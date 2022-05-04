export function populateUrlEncodedFormData(data = {}) {
    const formdata = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      if (key && value != null) {
        formdata.append(key, value)
      }
    })
    return formdata
  }
  