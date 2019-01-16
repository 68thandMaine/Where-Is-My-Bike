import { Practice } from './../src/practice.js';

describe('Practice', function() {

  it('should test practice has a name', function() {
    var practice = new Practice('Kristin');
    expect(practice.name).toEqual('Kristin');  });
});
