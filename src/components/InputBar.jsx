import React, { useState } from 'react';
import { 
  Input, 
  Segment, 
  Select,
  Button,
  Header
} from 'semantic-ui-react'

const inputConfig = [
    {
      key : 'get',
      text: 'GET',
      value: 'GET'
    },
    {
      key : 'post',
      text: 'POST',
      value: 'POST'
    },
    {
      key : 'put',
      text: 'PUT',
      value: 'PUT'
    },
    {
      key : 'patch',
      text: 'PATCH',
      value: 'PATCH'
    },
    {
      key : 'delete',
      text: 'DELETE',
      value: 'DELETE'
    }
  ] 


const InputBar = () => {

  const [url, setUrl ] = useState('')

  return (
    <div className="input-bar">
      <Segment color='orange'>
        <Header as='h2'>Postman Clone</Header>
        <Input
          fluid
          placeholder='https://mysite.com'>
          <Select defaultValue='GET' options={inputConfig} />
          <input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
          />            
          <Button>Send</Button>
        </Input>
      </Segment>
    </div>
  )
};

export default InputBar;

