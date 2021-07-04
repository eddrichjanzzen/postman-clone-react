import React from 'react';
import { 
  Input, 
  Segment, 
  Select,
  Button
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

class InputBar extends React.Component {

  render(){
    return (
      <div className="input-bar">
        <Segment color='orange'>
          <Input
            fluid
            placeholder='https://mysite.com'>
            <Select defaultValue='GET' options={inputConfig} />
            <input />            
            <Button>Send</Button>
          </Input>
        </Segment>
      </div>
    )
  }
}

export default InputBar;

