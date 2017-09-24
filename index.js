const axios = require('axios')
const { json, send } = require('micro')
const DOMAIN = 'https://xkcd.com/'
const PATH = 'info.0.json'

module.exports = async function(req, res) {
  const id = req.url.replace('/', '')
  const comicId = id ? `${id}/` : ''
  const path = `${DOMAIN}${comicId}${PATH}`
  const response = await axios(path)
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, response.data)
}
