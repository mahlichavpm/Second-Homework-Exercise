function lowerOrUpper(sym){

    function checkCase(sym) {
      
           if (sym == sym.toUpperCase()) {
              return 'upper-case';
           }
            else if (sym == sym.toLowerCase()){
              return 'lower-case';
           }
        }
     
        console.log(checkCase(sym));
}
lowerOrUpper('A')