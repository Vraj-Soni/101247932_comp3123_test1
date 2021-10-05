function lowerCase(myArray) {
    return new Promise((resolve, reject) => {
      if ( Array.isArray(myArray) && myArray.length >= 0) {
        const arrayWithString = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
        const lowerCaseStrings = arrayWithString.map((eachItemOfFilterArr) =>
          eachItemOfFilterArr.toLowerCase()
        );
  
        // resolve with the array having lower case strings
        resolve(lowerCaseStrings);
      } else {
        // otherwise reject the promise with a message
        reject("Invalid array");
      }
    });
  };
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  lowerCase(mixedArray)
    .then((value) =>
      // print array values when promise resolved
      console.log(value)
    )
    .catch((error) =>
      // print error when promise rejected
      console.log(error)
    );


    