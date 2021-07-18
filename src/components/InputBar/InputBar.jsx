import React from 'react';
import { 
  Input, 
  Segment, 
  Select,
  Button,
} from 'semantic-ui-react'

import './InputBar.css';

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

const size = 'large';
const color = 'orange';

const InputBar = ({ url, setUrl, httpMethod, setHttpMethod, onInputSend }) => {

  return (
    <div className="input-bar">
      <Segment color='orange'>
        <form>
          <Input
            fluid
            size={size}
            placeholder='https://mysite.com'>
            <div className="selection">
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
            <div className="button">
              <Button
                basic
                color={color}
                size={size} 
                onClick={(e)=> onInputSend(e)}>
                  Send
              </Button>
            </div>
          </Input>
        </form>
      </Segment>
    </div>
  )
};

export default InputBar;

