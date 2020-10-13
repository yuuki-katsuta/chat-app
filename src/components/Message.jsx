import React from "react"

const Message = (props) => {
  return (
    <div className="Message">
      <img className="" src={props.message.profile_image} />
      <div className="">
        <p className="">@{props.message.user_name}</p>
        <p className="">{props.message.text}</p>
      </div>
    </div>
  )
}
export default Message
