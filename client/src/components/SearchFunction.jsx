import React, { Component } from "react"
import axios from "axios"


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
      console.log('searchquery', searchQuery)
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      console.log(response)
      this.setState({
        books: response.data
      })
    }
    catch (error) {
      alert("We don't have information for that. Refresh the page and try Again!")
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
    console.log('this state books', this.state.books.items)
    let books = this.state.books.length !== 0 && this.state.books.items.map((book, index) => {
      const volumeInfo = book.volumeInfo
      return (
        <div key={index}>
          <img src={volumeInfo.imageLinks.smallThumbnail} alt={"book cover"} />
          <h2>{volumeInfo.title}</h2>
          <p>{volumeInfo.authors[0]}</p>
          <p>{volumeInfo.description}</p>
          <p>{book.id}</p>
        </div>
      )
    })
    return (
      <>
        <Search
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
          placeholder="Enter Search Query"
        />
        {books}
      </>
    )
  }
}


export default SearchFunction

const Search = ({ onChange, onSubmit, name, value }) => {
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