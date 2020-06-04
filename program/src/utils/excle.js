import ExportJsonExcel from 'js-export-excel'
export default function output(tname,thead,tdatas) {
    const option = {
        fileName: tname,
        datas: [
            {
                sheetData:tdatas,
                sheetName: 'sheet1',
                sheetHeader: thead,
            }
        ]
    };
    ExportJsonExcel(option).saveExcel()
}