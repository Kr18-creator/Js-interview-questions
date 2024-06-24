const input = {
    name: 'Rashmi',
    age: 25,
    department: {
      name: 'Engineering',
      section: 'Technical',
      branch: {
        name: 'Bangalore',
        timezone: 'IST'
      }
    },
    company: {
      name: 'GeekyAnts',
      customers: ['Ford', 'Nestle']
    },
    skills: ['javascript', 'node.js', 'html']
  };
  
  function flattenObject(obj) {
    // Initialize an empty object to store flattened properties
    const result = {};
  
    // Inner function to recursively flatten the object
    function flatten(obj, parentKey = '') {
      // Iterate over each property in the object
      for (let key in obj) {
        // Construct the new key by appending current key to parentKey (if present)
        const newKey = parentKey ? `${parentKey}_${key}` : key;
  
        // Check if the current property is an object and not null
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
          // Recursively flatten nested objects, passing the newKey
          flatten(obj[key], newKey);
        } else {
          // If the property is not an object, assign it to the result object with newKey
          result[newKey] = obj[key];
        }
      }
    }
  
    // Call the flatten function with the initial object
    flatten(obj);
  
    // Return the resulting flattened object
    return result;
  }
  
  const output = flattenObject(input);
  console.log(output);
  