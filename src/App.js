import React from 'react';
import './App.css';
import ChatForm from './components/ChatForm'
import Message from './components/Message'
import { firebaseDb } from './firebase/index.js'

const messages = firebaseDb.collection("messages")




class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      text: "",
      user_name: "",
      profile_image: "",
      messages: []
    }
  }

  componentDidMount() {
    messages.onSnapshot
      ((querySnapshot) => {
        // クエリが非同期処理のため、この中にsetStateなどを書かないと空になってしまう
        let msgs = []
        querySnapshot.forEach((doc) => {
          // 新しい順に取得される
          const m = doc.data();
          msgs.push({
            'text': m.text,
            'user_name': m.user_name,
            'profile_image': m.profile_image,
          })
        });
        this.setState({
          messages: msgs
        });
      });
  }

  onTextChange(e) {
    if (e.target.name === 'user_name') {
      this.setState({
        "user_name": e.target.value,
      });
    } else if (e.target.name === 'profile_image') {
      this.setState({
        "profile_image": e.target.value,
      });
    } else if (e.target.name === 'text') {
      this.setState({
        "text": e.target.value,
      });
    }
  }

  onButtonClick() {
    // 簡単なバリデーション
    if (this.state.user_name === "") {
      alert('user_name empty')
      return
    } else if (this.state.text === "") {
      alert('text empty')
      return
    }
    messages.add({
      "user_name": this.state.user_name,
      "profile_image": this.state.profile_image,
      "text": this.state.text,
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chat</h2>
        </div>
        <div className="MessageList">
          {this.state.messages.map((m, i) => {
            return <Message key={i} message={m} />
          })}
        </div>
        <ChatForm onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
