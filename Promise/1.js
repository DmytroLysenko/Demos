// function* dataGenerator() {
//   yield "data 1 is loaded!";
//   yield "data 2 is loaded!";
//   yield "data 3 is loaded!";
//   yield "data 4 is loaded!";
// }

// const gen = dataGenerator();

// function loadScript() {
//   const genNext = gen.next();
//   const nextValue = genNext.value;
//   const isError = genNext.done;

//   return new Promise((resolve, reject) => {
//     if (isError) reject(new Error("DONE"));
//     resolve(nextValue);
//   });
// }

// const log = (data) => console.log(data);
// const handleError = (err) => console.log("err.message");

// loadScript()
//   .then(handler)
//   .then(handler)
//   .then(handler)
//   .then(handler)
//   .catch((err) => log(err));

// function handler(data) {
//   log(data);
//   return loadScript();
// }

//--------------------------------------------------

// class CustomError extends Error {
//   constructor() {
//     super();
//   }
// }

// const promise = new Promise((res, rej) => res());

// promise
//   .then(() => {
//     throw new CustomError();
//   })
//   .catch((err) => {
//     if (err instanceof Error) {
//       // handle error
//     } else {
//       throw err;
//     }
//   })
//   .then(() => {
//     console.log("still working!");
//   })
//   .catch((err) => {
//     console.log("There are no handle methods for this err ");
//     throw err;
//   });

//--------------------------------------------------

// window.addEventListener('unhandledrejection', function(event) {
//   // объект события имеет два специальных свойства:
//   alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
//   alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
// });

// new Promise(function() {
//   throw new Error("Ошибка!");
// }); // нет обработчика ошибок

//--------------------------------------------------
// Promise not rejected - Error is not synchronous
// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

//--------------------------------------------------
// Promisify

