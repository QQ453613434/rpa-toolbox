import { decrypt } from './cryptoJs'
import { utils, writeFile } from 'xlsx'
export function getErpInfo() {
  try {
    return JSON.parse(decrypt(localStorage.getItem('erp-info')))
  } catch (error) {
    return {}
  }
}

export function exportData(data, headers, fileName = '未命名', sheetName = 'sheet1') {
  const wb = utils.book_new() /* 新建book */
  let tableData = []
  data.forEach((item) => {
    let temporaryObj = {}
    for (const key in headers) {
      if (Object.hasOwnProperty.call(headers, key)) {
        const header = headers[key]
        temporaryObj[header] = item[key]
      }
    }
    tableData.push(temporaryObj)
  })
  const ws = utils.json_to_sheet(tableData) /* 新建空workbook，然后加入worksheet */
  utils.book_append_sheet(wb, ws, `${sheetName}`) /* 生成xlsx文件(book,sheet数据,sheet命名) */
  writeFile(wb, `${fileName}.xlsx`) /* 写文件(book,xlsx文件名称) */
}
