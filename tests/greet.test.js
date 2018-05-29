describe('Greetings', function(){
  describe('Greet users in different language', function(){
      it ('check if user is  greeted in English', function(){
        var text = Greet();
        text.greetkey('English','ziya');
        assert.equal(text.greetkey('English','ziya'),'Hi, ziya');
    });
    it ('check if user is  greeted in xhosa', function(){
      var text = Greet();
      text.greetkey('Isixhosa','lili');
      assert.equal(text.greetkey('Isixhosa','lili'),'molo, lili');
  });
  it ('check if user is  greeted in Afrikaans', function(){
    var text = Greet();
    text.greetkey('Afrikaans','yola');
    assert.equal(text.greetkey('Afrikaans','yola'),'hallo, yola');
});
  });

  describe('Stored Names', function(){
    it ('returns stored names', function(){
      var text2 = Greet();
      text2.calculate('English', 'lihle');
      text2.calculate('English', 'siya');
      text2.calculate('English', 'yola');
      text2.calculate('English', 'sethu');
      assert.deepEqual(text2.names(),{'lihle':0,'siya':0,'yola':0,'sethu':0 });
    });
  });

  describe('count users', function(){
  it ('counts how many names are stored ', function(){
    var text3 = Greet();
    text3.calculate('English', 'lihle');
    text3.calculate('English', 'siya');
    text3.calculate('English', 'yola');
    text3.calculate('English', 'sethu');
    assert.deepEqual(text3.count(),4);
  });
  });
  describe ('Greeting object', function(){

  it("should return users stored in localStorage", function(){
    var greet = Greet({"Ziya":1,"Ziya":2,"Buhle":1})

    assert.equal(2, greet.count());

  });
});
});
