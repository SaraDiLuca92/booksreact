import { Component } from "react"
import { Row } from "react-bootstrap"
import fantasy from "../json/fantasy.json"
import history from "../json/history.json"
import horror from "../json/horror.json"
import romance from "../json/romance.json"
import scifi from "../json/scifi.json"
import { SingleBook } from "./SingleBook"

class BookSelector extends Component {
  state = {
    query: ""
  }
  filterBookList(ev) {
    console.log(ev.target.value)
    this.setState({
      query: ev.target.value
    })
  }
  render() {
    return (
      <>
      <input type="text" onChange={(event)=> this.filterBookList(event)} />
       
        <Row>
          {fantasy.filter((book)=> {
            return book.title.toLowerCase().includes(this.state.query.toLowerCase())
          }).map((book) => {
            return <SingleBook bookProp={book} />
          })}
        </Row>
      </>
    )
  }
}

export default BookSelector
