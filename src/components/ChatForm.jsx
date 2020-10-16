import React from "react"

const ChatForm = (props) => {

  const style = {
    "ChatForm": {
      marginTop: "5em",
      marginBottom: "8em",
    },
  }

  return (
    <div>
      <div style={style.ChatForm}>
        <div style={style.ChatInput}>
          <input name='user_name' onChange={props.onTextChange} placeholder="名前" />
          <input name='profile_image' onChange={props.onTextChange} placeholder="プロフィール画像URL" />
        </div>

        <textarea name='text' onChange={props.onTextChange} />
        <button onClick={props.onButtonClick}>送信</button>
      </div>
    </div>
  )
}
export default ChatForm
