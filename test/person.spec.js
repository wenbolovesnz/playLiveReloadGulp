describe('person can talk', function () {
    var person;
    beforeEach(function(){
        person = new Person();
    });

    it('person will reply cool', function () {
        expect(person.talk('gulp')).toEqual('cool');
    });

    it('person will reply i dont know', function () {
        expect(person.talk('ramda')).toEqual('I do not know.');
    });
});
