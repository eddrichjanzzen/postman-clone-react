import React from 'react';
import { 
  Input, 
  Button,
  Grid
} from 'semantic-ui-react';

const initialState = {
  id: 0,
  keyItem: '',
  valueItem: ''
}

class AddKeyValue extends React.Component {
  
  state = {
    ...initialState
  }

  componentDidMount(){
    this.setState({
      id: this.props.keyPair.id
    })
  }


  handleOnChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    }, ()=> {
      this.props.onKeyPairUpdate(this.state);
    });
  }

  handleOnClick = () => {
    const keyPair = this.props.keyPair
    this.props.onKeyPairRemove(keyPair);
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
              <Button
                onClick={()=> this.handleOnClick()}
                >Remove
              </Button>
            </Grid.Column>
  
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AddKeyValue;