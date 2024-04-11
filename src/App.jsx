import React from 'react';
import ButtonComponent from './components/Button';
import { InputComponent } from './components/InputComponent';
import { SelectComponent } from './components/SelectComponent';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import DatePickerComponent from './components/DatePickerComponent';





const App = () => {
 return (
  <div>
    <ButtonComponent/>
    <InputComponent/>
    <SelectComponent/>
    <FormComponent/>
    <TableComponent/>
    <DatePickerComponent/>
  </div>
 )
};

export default App;