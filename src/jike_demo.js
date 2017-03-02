/**
 * Created by 6396000799 on 2017/3/1.
 */
import React from 'react'
import Showdown from 'showdown'
import $ from 'jquery'
const converter = new Showdown.Converter()
const l = console.log


export const CommentBox = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },
  componentDidMount() {
    // $.ajax({
    //   url: '/asset-manifest.json',
    //   success(data) {l(data)},
    //   error(err) {l(err)}
    // })
    fetch(`${process.env.PUBLIC_URL}/tsconfig.json`).then(res => res.json())
      .then(res => {
        this.setState({data: res})
      })
      .catch(err => console.error(err))
  },
  render() {
    return (
      <div className="commentBox">
        <h1>comment title</h1>
        <CommentList data={this.props.data}></CommentList>
        <CommentForm></CommentForm>
      </div>
    )
  },
})

export const CommentList = React.createClass({
  render() {
    const commentNodes = this.props.data.map(
      (comment, i) => <Comment author={comment.author} key={i}>{comment.text}</Comment>)
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
})

export const CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        hello, i am commentForm
      </div>
    )
  }
})



class Comment extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    var rawHtml = converter.makeHtml(this.props.children.toString())
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        {converter.makeHtml(this.props.children)}
      </div>
    )
  }
}