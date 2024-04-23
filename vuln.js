const {XMLParser, XMLBuilder, XMLValidator} = require('fast-xml-parser');

const xmlDataStr = <root a="nice" checked><a>wow</a></root>;

const options = {
    ignoreAttributes: false,
    ignoreNameSpace : true
};
const parser = new XMLParser(options);
const output = parser.parse(xmlDataStr);