import React, { Component } from 'react';  
import ReactTable from "react-table"; 
import {AppProvider, Page} from '@shopify/polaris';
import DataTable from './DataTable';


 
  
class Employee extends Component {  
  render() {  
     const headings= [
       'Name',
       'Job'
     ] ;
     const rows = [
       [       'Charlie',
       'Janitor'
     ]  ,
     ['Mac',
     'Bouncer'
    ],
    [
      'Dee',
      'Aspring actress'
    ],
    [
      'Dennis',
      'Bartender'
    ],
  ];
    return (  
      <AppProvider>
      <Page>
        <DataTable headings={headings} rows={rows} />
      </Page>
    </AppProvider>
    )  ;  
  }  
}  
export default Employee;