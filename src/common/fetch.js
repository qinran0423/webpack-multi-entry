export default (endpoint) => {
  return fetch(`https://jsonplaceholder.typicode.come${endpoint}`).then(
    (response) => response.json()
  )
}
