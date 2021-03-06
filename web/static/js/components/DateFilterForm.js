import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import DateTime from 'grommet/components/DateTime';
import UpdateIcon from 'grommet/components/icons/base/Update';
import Button from 'grommet/components/Button';

export default class DateFilterForm extends Component {
  renderTotalButton() {
    if (typeof this.props.onTotalButtonClick === 'function') {
      return (
        <Box>
          <br />
          <Button label="Total"
            onClick={this.props.onTotalButtonClick} /> 
        </Box>
      )
    }

    return null;
  }
  
  render() {
    return (
       <Box size="medium"
        pad={{horizontal: "large"}}>
        
        <Label>Start date</Label>
        <FormField>
          <DateTime name="startDate"
            format='DD/MM/YYYY'
            value={this.props.startDate}
            onChange={this.props.onStartDateChange} />
        </FormField>  
        
        <Label>End date</Label>
        <FormField>
          <DateTime name="endDate"
            format='DD/MM/YYYY'
            value={this.props.endDate}
            onChange={this.props.onEndDateChange} />
        </FormField> 
        
        {this.renderTotalButton()}
        <br />
        
        <Button icon={<UpdateIcon />} 
          label="Update"
          primary={true}
          onClick={this.props.onUpdate} />
      </Box> 
    )
  }
}