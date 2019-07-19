const http = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result
    })
}

export default http