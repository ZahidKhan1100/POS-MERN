import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const CategoryTable = ({ categories }) => {
  const columns = [
    {
      name: 'Category Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'description',
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="action">
          <Button variant="info"><FaEdit /></Button>
          <Button variant="danger"><MdDelete /></Button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={categories}
      striped
      bordered
      highlightOnHover
    />
  );
};

export default CategoryTable;
