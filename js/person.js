function Person(){
    var talk = function(word){
        if(word == 'gulp'){
            return 'cool';
        }else{
            return 'I do not know.';
        }
    }

    return {
        talk : talk
    };
}
