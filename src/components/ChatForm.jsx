import React from "react"

const ChatForm = (props) => {
  return (
    <div>
      <div className="ChatForm">
        <div className="">
          <input name='user_name' onChange={props.onTextChange} className="" placeholder="名前" />
          <input name='profile_image' onChange={props.onTextChange} className="" placeholder="プロフィール画像URL" />
        </div>

        <textarea name='text' className="" onChange={props.onTextChange} />
        <button className="" onClick={props.onButtonClick}>送信</button>
      </div>
    </div>
  )
}
export default ChatForm
