import React from 'react';
import MaterialTable from 'material-table';
import { people } from './data.js';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Computer Address Host', field: 'ip_address' },
        ]}
        data={people}
        title="Who are your neighbors?"
        options={{
          headerStyle: {
            background: 'lightpink',
          },
          rowStyle: {
            background: 'teal',
          },
        }}
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'back',
          },
        }}
      />{' '}
    </div>
  );
}
