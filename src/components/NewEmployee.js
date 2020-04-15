import React from 'react';

var MOUNTAINS = [
    {name: "Kilimanjaro",  country: "Tanzania"},
    {name: "Everest",  country: "Nepal"},
    {name: "Mount Fuji", country: "Japan"},
    {name: "Mont Blanc",  country: "Italy/France"},
    {name: "Vaalserberg",  country: "Netherlands"}
    
  ];
  
  const buildRow = (row, i) => {
    let td = Object.keys(row).map((k, j) => {
      return <td key={j}>{row[k]}</td>  
    })
    return (
      <tr key={i}>{td}</tr>
    )
  }
  const buildHeader = (header) => {
    let th = header.map((k, j) => {
      return <th key={j}>{k}</th>  
    })
    return (
      <tr>{th}</tr>
    )
  }
  
  const Table = (props) => {
    const {data} = props
    return (
      <table className="table table-striped">
        <thead>
          {buildHeader(Object.keys(data[0]))}
        </thead>
        <tbody>
          {data.map(buildRow)}
        </tbody>
      </table>
     )
  }
  
  ReactDOM.render(
    <Table data={MOUNTAINS} />,
    document.getElementById("container")
  )