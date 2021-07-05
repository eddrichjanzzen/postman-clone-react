import React from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

class AddKeyValue extends React.Component {
  
  state = {
    id: 0,
    keyItem: '',
    valueItem: ''
  }

  handleOnChange = (e) => {
    this.setState({
      id: this.props.keyPair.id,  
      [e.target.name] : e.target.value
    }, ()=> {
      this.props.onKeyPairUpdate(this.state);
    });
  }

  render(){
    return (
      <div className="add-key-value">
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
  
            <Grid.Column width={7}>
              <Input 
                fluid 
                placeholder='Key'
                name='keyItem'
                onChange={(e) => this.handleOnChange(e)}/>
            </Grid.Column>
  
            <Grid.Column width={7}>
              <Input 
                fluid 
                placeholder='Value'
                name='valueItem'
                onChange={(e) => this.handleOnChange(e)}/>
            </Grid.Column>
  
            <Grid.Column width={2}>
              <Button >Remove</Button>
            </Grid.Column>
  
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AddKeyValue;