import React from "react"

const Message = (props) => {
  const style = {
    "item": {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "1em",
      marginLeft: "5em",
      marginTop: "0.8em"
    },
    "itemImage": {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "20px",
    },
    "itemName": {
      textAlign: "left",
      fontSize: "80%",
      marginLeft: "0.5em"
    },
    "itemMessage": {
      position: "relative",
      display: "inline-block",
      padding: "0.8em",
      background: "#deefe8",
      borderRadius: "4px",
      lineHeight: "1.2em",
    }
  }

  return (
    <div className="Message" style={style.item}>
      <img style={style.itemImage} src={props.message.profile_image} />
      <div className="">
        <p style={style.itemName}>@{props.message.user_name}</p>
        <p style={style.itemMessage}>{props.message.text}</p>
      </div>
    </div>
  )
}
export default Message
