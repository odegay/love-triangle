/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  var trianglesCount = 0;  
  for (var i = 0; i<preferences.length; i++) {
    var lover1, lover2, lover3, lover3Loves;
    if (preferences[i]>0) {
      lover1 = i + 1;
      lover2 = preferences[i];
      lover3 = preferences[lover2 - 1];
      lover3Loves = preferences[lover3 - 1];
      if (lover1 != lover2)
      {
        if ( lover3Loves == lover1) {
          preferences[lover1 - 1] = -1;
          preferences[lover2 - 1] = -1;
          preferences[lover3 - 1] = -1;
          trianglesCount++;               
        }
      }

    }    
  }
  return trianglesCount;
};
