 function execute(){
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var HTMLParser = require('node-html-parser');

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://www.mainzer-mobilitaet.de/typo3conf/ext/itcsoutput/Classes/Utility/autocomplete__1.php?p1=427&q=Hildegard-v.-Bingen-Str.&p3=10&_=1544436730879", false ); // false for synchronous request
  xmlHttp.send( null );
  console.log(xmlHttp.responseText);
  var response = xmlHttp.responseText;
  var patternLinie = /itcs-data_table-dataLinie".*">.*<\/div>/g;
  var patternZiel = /itcs-data_table-dataZiel">.*<\/div>/g;
  var patternZeit = /itcs-data_table-dataZeit">.*<\/div>/g;

  //LINIE
  var linieSearch = patternLinie.exec(response);
  var linieSearchTrimmed = [];
  var i=0;
  while (linieSearch != null) {
    linieSearchTrimmed[i]=linieSearch[0].replace("<\/div>","");
    linieSearchTrimmed[i]=linieSearchTrimmed[i].replace("itcs-data_table-dataLinie\" style=\"background-color:#00649C;\">","");
    linieSearchTrimmed[i]=linieSearchTrimmed[i].replace("itcs-data_table-dataLinie\" style=\"background-color:#008AD1;\">","");
    linieSearch = patternLinie.exec(response);
    i+=1;
  }
  for (i = 0; i < linieSearchTrimmed.length; i++) {
      console.log(linieSearchTrimmed[i]);
  }
  //ZIEL
  var zielSearch = patternZiel.exec(response);
  var zielSearchTrimmed = [];
  var i=0;
  while (zielSearch != null) {
    zielSearchTrimmed[i]=zielSearch[0].replace("<\/div>","");
    zielSearchTrimmed[i]=zielSearchTrimmed[i].replace("itcs-data_table-dataZiel\">","");
    zielSearch = patternZiel.exec(response);
    i+=1;
  }
  for (i = 0; i < zielSearchTrimmed.length; i++) {
      console.log(zielSearchTrimmed[i]);
  }
  //ZEIT
  var zeitSearch = patternZeit.exec(response);
  var zeitSearchTrimmed = [];
  var i=0;
  while (zeitSearch != null) {
    zeitSearchTrimmed[i]=zeitSearch[0].replace("<\/div>","");
    zeitSearchTrimmed[i]=zeitSearchTrimmed[i].replace("itcs-data_table-dataZeit\">","");
    zeitSearch = patternZeit.exec(response);
    i+=1;
  }
  for (i = 0; i < zeitSearchTrimmed.length; i++) {
      console.log(zeitSearchTrimmed[i]);
  }
}
 setInterval(execute,5000);
