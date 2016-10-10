// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Pilidelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('succes', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 2000)
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })


function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('no valid input provided');
      }
    }, 4000)
  });
}

addPromise(10, 12).then(function(sum) {
  console.log('promise success', sum);
}, function(err) {
  console.log('promise error', err);
});

addPromise('a', 'b').then(function(sum) {
  console.log('promise success', sum);
}, function(err) {
  console.log('promise error', err);
});
