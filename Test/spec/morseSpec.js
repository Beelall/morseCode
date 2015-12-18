
describe("moveImgRight specification tests (with setup and tear-down)", function() {
 var testVar=null;
 var mp = new morsePlayer();
  

 
 it("it tracks that the spy was called for play", function() {
  spyOn(mp, 'play');
  gc.CallPlay(testVar);
    expect(mp.play).toEqual('a');
  });
  
 
 it("it tracks that the spy was called for play", function() {
  spyOn(mp, 'play');
  mp.CallPlay(testVar);
    expect(mp.play).toHaveBeenCalled();
  });