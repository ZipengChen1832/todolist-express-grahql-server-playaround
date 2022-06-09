import React, { Component } from 'react'
import TodoListApp from './TodoList/TodoListApp'
import Playaround from './playaround/Playaround'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
  uri: 'http://localhost:4001',
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <Playaround />
    )
  }
}
