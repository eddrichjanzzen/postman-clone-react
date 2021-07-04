import React from 'react';
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

class InputBar extends React.Component {

  state = {
    url : ""
  }

  onInputChange = (e) => {
    this.setState({url: e.target.value });
  }

  render(){
    return (
      <div className="input-bar">
        <Segment color='orange'>
          <Header as='h2'>Postman Clone</Header>
          <Input
            fluid
            placeholder='https://mysite.com'>
            <Select defaultValue='GET' options={inputConfig} />
            <input 
              value={this.state.url} 
              onChange={this.onInputChange}
            />            
            <Button>Send</Button>
          </Input>
        </Segment>
      </div>
    )
  }
}

export default InputBar;

