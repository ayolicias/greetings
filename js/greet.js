function Greet(storednames) {

  // var storednames = "";
  var names = storednames || {};

  function greetingFunction(language, name){
    if (name !== '' && language){
    if (names[name]  === undefined){
      names[name] = 0;

    }
  }
}
  function greet(language, name){
    if (language === 'English') {
      return 'Hi, ' + name;
    }
    if (language === 'Afrikaans') {
      return 'hallo, ' + name;
    }
    if (language === 'Isixhosa') {
      return 'molo, ' + name;
    }

    //return language +', '+ name;
  }

  function getMap() {
    return names;
  }

  function getcount() {
    return Object.keys(names).length;
  }

  function getnames() {
    return names;
  }

  return {
    count: getcount,
    names: getnames,
    calculate: greetingFunction,
    storedMap: getMap,
    greetkey: greet
  }
}
var greets= Greet();
