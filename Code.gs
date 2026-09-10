const SHEET_NAME = 'Responses';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  const ids = ['HC1','HC2','HC3','HC4','HC5','EI1','EI2','EI3','EI4','TA1','TA2','TA3','TA4','CI1','CI2','CI3','CI4','PS1','PS2','PS3','PS4','PS5','TC1','TC2','TC3','TC4','TC5','IP1','IP2','IP3','IP4','DV1','DV2','DV3','DV4','DV5'];
  const header = ['Timestamp','Language'].concat(ids);
  if (sheet.getLastRow() === 0) sheet.appendRow(header);
  const row = [new Date(data.timestamp || new Date()), data.language || 'th'].concat(ids.map(id => data.answers && data.answers[id] || ''));
  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Survey endpoint is running.');
}
