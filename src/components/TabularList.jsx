import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import KeyValuePane from './panes/KeyValuePane';


const TabularList = () => {
  
  const tabListInitState = [
    {
      id: 0,
      keyItem : '',
      valueItem : ''
    }
  ] 

  const [queryParams, setQueryParams] = useState(tabListInitState);
  const [headers, setHeaders] = useState(tabListInitState);

  // configuration for panes
  const panes = [
    {
      menuItem: 'Query Params',
      render: () => <KeyValuePane
                      key='queryParams'
                      tabName='queryParams'
                      keyValueList={queryParams}
                      onKeyPairAdd={onKeyPairAdd}
                      onKeyPairUpdate={onKeyPairUpdate}
                      onKeyPairRemove={onKeyPairRemove}
                    />
    },
    {
      menuItem: 'Headers',
      render: () => <KeyValuePane
                      key='headers'
                      tabName='headers'
                      keyValueList={headers}
                      onKeyPairAdd={onKeyPairAdd}
                      onKeyPairUpdate={onKeyPairUpdate}
                      onKeyPairRemove={onKeyPairRemove}
                    />
    },
    { 
      menuItem: 'JSON', 
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> 
    }
  ]


  const onKeyPairAdd = (tabName) => {


    if(tabName === 'headers'){
      setHeaders(headers => [...headers, {
        id: headers.length,
        keyItem: '',
        valueItem: ''
      }])
    }

    if(tabName === 'queryParams'){
      setQueryParams(queryParams => [...queryParams, {
        id: queryParams.length,
        keyItem: '',
        valueItem: ''
      }])
    }
  }

  const onKeyPairRemove = (tabName, keyPair) => {

    if(tabName === 'headers'){
      let newKeyValues = [...headers];
      newKeyValues = newKeyValues.filter(x => x.id !== keyPair.id);
      setHeaders(newKeyValues);
    }

    if(tabName === 'queryParams'){
      let newKeyValues = [...queryParams];
      newKeyValues = newKeyValues.filter(x => x.id !== keyPair.id);
      setQueryParams(newKeyValues);
    }


  }

  const onKeyPairUpdate = (tabName, keyPair) => {
    // Reference:
    // https://javascript.plainenglish.io/react-updating-a-value-in-state-array-7bae7c7eaef9

    // first look for the elements index

    if(tabName === 'headers'){
      const elementIndex = headers.findIndex(element => element.id === keyPair.id);
      let newKeyValues = [...headers];
      
      newKeyValues[elementIndex] = {
        ...newKeyValues[elementIndex], 
        keyItem: keyPair.keyItem,
        valueItem: keyPair.valueItem
      };
      
      setHeaders(newKeyValues);
    }


    if(tabName === 'queryParams'){
      const elementIndex = queryParams.findIndex(element => element.id === keyPair.id);
      let newKeyValues = [...queryParams];
      
      newKeyValues[elementIndex] = {
        ...newKeyValues[elementIndex], 
        keyItem: keyPair.keyItem,
        valueItem: keyPair.valueItem
      };
      
      setQueryParams(newKeyValues);
    }
  }

  return (
    <div className="tabular-list">
      <Tab 
        panes={panes}
      />
    </div>
  );

};

export default TabularList;
