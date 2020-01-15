function toJson(xmlData) {
    var options = {};
    if( parser.validate(xmlData) === true) {
        var jsonObj = parser.parse(xmlData, options);
    }
    return jsonObj;
}
function toPascalVOC(json) {
    var options = {};
    var Parser = parser.j2xParser;
    var parserObject = new Parser(options);
    var xml = parserObject.parse(json);
    return xml;
}
