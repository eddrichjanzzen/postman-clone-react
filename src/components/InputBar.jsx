import React from 'react';
import { 
  Input, 
  Segment, 
  Select,
  Button,
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



const InputBar = ({ url, setUrl, httpMethod, setHttpMethod, onInputSend }) => {

  return (
    <div className="input-bar">
      <Segment color='orange'>
        <Input
          fluid
          placeholder='https://mysite.com'>
          <div style={{
            'paddingRight': '1em'
          }}>
            <Select
              compact
              defaultValue={httpMethod} 
              options={inputConfig}
              onChange={(_e, data)=> setHttpMethod(data.value)} />
          </div>
          <input 
              value={url} 
              onChange={(e) => setUrl(e.target.value)}
            />   
          <div style={{
            'paddingLeft': '1em'
          }}>
            <Button onClick={()=> onInputSend()}>Send</Button>
          </div>
        </Input>
      </Segment>
    </div>
  )
};

export default InputBar;

