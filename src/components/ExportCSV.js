import React from 'react'

import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';



export const ExportCSV = ({ csvData, fileName }) => {

    let new_arr = [];

    csvData.map((item,index)=>{
        new_arr.push({
            '#' : index + 1,
            'Timestamp' : new Date(item.timestamp).toString(),
            'environment' : item?.environment,
            'gateway1Mac' : item.gateway1Mac,
            'gateway1Rssi' : item.gateway1Rssi,
            'gateway2Mac' : item.gateway2Mac,
            'gateway2Rssi' : item.gateway2Rssi,
            'gateway3Mac' : item.gateway3Mac,
            'gateway3Rssi' : item.gateway3Rssi,
            'beacon' : item.beacon,
            'zone_id' : item.zone_id,
        })
    })



    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData, fileName) => {

        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], { type: fileType });

        FileSaver.saveAs(data, fileName + fileExtension);

    }



    return (

        <button style={{display:'none'}} id="export-excel-button" className="btn btn-primary" onClick={(e) => exportToCSV(new_arr, fileName)}>Export As Excel</button>

    )

}