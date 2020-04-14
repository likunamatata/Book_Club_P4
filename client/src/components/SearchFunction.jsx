import React, { Component } from "react"
import axios from "axios"
import '../Styles/SearchFunction.css'


class SearchFunction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      input: [],
      searchQuery: ''
    }
  }

  fetchInfo = async (searchQuery) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      this.setState({
        books: response.data
      })
    }
    catch (error) {
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.fetchInfo(this.state.searchQuery)
  }


  Search = ({ onChange, onSubmit, name, value }) => {
    return (
      <form onSubmit={e => onSubmit(e)}>
        <div className="search">
          <input
            value={value}
            onChange={e => onChange(e)}
            name={name}
            type="text"
            placeholder="Enter Search Query"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    )
  }

  render() {
    let books = this.state.books.length !== 0 && this.state.books.items.map((book, index) => {
      const volumeInfo = book.volumeInfo
      return (
        <div key={index} className='volume-container'>
          <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'http://clipart-library.com/images/rinG8dG7T.png'} alt={"book cover"} />
          <div className='volume-text'><h3>{volumeInfo.title}</h3>
            <p>{volumeInfo.authors ? volumeInfo.authors[0] : 'Author Unknown'}</p>
            <p>{volumeInfo.description}</p>
            <p className='highlight'>COPY THIS: {book.id}</p>
          </div>
        </div >
      )
    })
    return (
      <div className='search'>
        <Search
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
          placeholder="Enter Search Query"
        />
        <div className='search-display'>
          {books}
        </div>
      </div>
    )
  }
}


export default SearchFunction

const Search = ({ onChange, onSubmit, name, value }) => {
  return (
    <form className="search-form" onSubmit={e => onSubmit(e)}>
      <p>Search Here</p>
      <input
        value={value}
        onChange={e => onChange(e)}
        name={name}
        type="text"
        placeholder="Book title or author"
      />
      <button type="submit">Search</button>
    </form>
  )
}