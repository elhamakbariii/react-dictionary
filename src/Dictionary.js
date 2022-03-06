import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result'
import Photos from './Photos'
import './Dictionary.css'

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword)
  const [loaded, setLoaded] = useState(false)
  const [definition, setDefinition] = useState(null)
  const [photos, setPhotos] = useState([])

  function handleImages(response) {
    setPhotos(response.data.photos)
  }

  function handleResponse(response) {
    setDefinition(response.data[0])
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`
    let apiKey = '563492ad6f91700001000001ac6bd4a96db444b2b8110ee3e62d4edd'
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages)
  }

  function load() {
    setLoaded(true)
    search()
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to know?</label>
            <input
              type="search"
              placeholder="Type a word + Enter"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. pink, cat, sing, well</small>
        </section>
        <Result definition={definition} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
    return 'Loading...'
  }
}