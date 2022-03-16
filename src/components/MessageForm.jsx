import React , { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined } from '@ant-design/icons';
const MessageForm = (props) => {

  const [value, setValue] = useState('');
  const { chatId, creds } = props

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if(text.length > 0) sendMessage(creds, chatId, { text });
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props,  chatId);
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files : e.target.files , text: ''})
  }

  return (
    <form className="message-form" onSubit={handleSubmit}>
      <input className='message-input' 
      type="text" 
      placeholder='Type a message...'
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      />
      <label htmlFor='upload-button' >
        <span className='image-button'><i className="fa-solid fa-image picture-icon"></i></span>
      </label>
      <input type="file" multiple={false} id="upload-button" style={{display: 'none'}} onChange={handleUpload} />
      <button type="submit" className='send-button'>
        <SendOutlined className="send-icon" />
      </button>
    </form>
  )
}

export default MessageForm