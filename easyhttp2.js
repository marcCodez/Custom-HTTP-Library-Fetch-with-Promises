/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Marc Pulumbarit
 * @license MIT
 *
 **/

 //this would be the synchronous way, then creating a variable in app.js for get and doing console.log
// class EasyHTTP {
//     get(url) {
//        
//         fetch(url)
//         //fetch url returns a promise so we use a .then to get the response
//         .then(res => res.json())
//         // will give us the data and log it
//         .then(data => data)
//         // if theres an error we can catch it
//         .catch(err => err);
//     }
// }


// asynchronous with promise
 class EasyHTTP {

    // Make a HTTP GET Request
     get(url) {
         // We want to wrap this entire fetch in a promise
         // a pomise takes in resolve(for a response) and reject(for an error)
         return new Promise((resolve, recject) => {
            fetch(url)
            //fetch url returns a promise so we use a .then to get the response
            .then(res => res.json())
            // will give us the data
            .then(data => resolve(data))
            // if theres an error we can catch it
            .catch(err => reject(err));
         });
        
     }

     // Make a HTTP POST Request
     post(url, data) {
        // We want to wrap this entire fetch in a promise
        // a pomise takes in resolve(for a response) and reject(for an error)
        return new Promise((resolve, recject) => {
            // when we make a POST request we need to add in an object
           fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           //fetch url returns a promise so we use a .then to get the response
           .then(res => res.json())
           // will give us the data
           .then(data => resolve(data))
           // if theres an error we can catch it
           .catch(err => reject(err));
        });
       
    }

    // Make a HTTP PUT Request - pretty much the same as POST
    put(url, data) {
        // We want to wrap this entire fetch in a promise
        // a pomise takes in resolve(for a response) and reject(for an error)
        return new Promise((resolve, recject) => {
            // when we make a POST request we need to add in an object
           fetch(url, {
               method: 'PUT',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           //fetch url returns a promise so we use a .then to get the response
           .then(res => res.json())
           // will give us the data
           .then(data => resolve(data))
           // if theres an error we can catch it
           .catch(err => reject(err));
        });
       
    }

    // Make a HTTP DELETE Request - doesnt need data + remove the body
    delete(url) {
        // We want to wrap this entire fetch in a promise
        // a pomise takes in resolve(for a response) and reject(for an error)
        return new Promise((resolve, recject) => {
            // when we make a POST request we need to add in an object
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'application/json'
               }
           })
           //fetch url returns a promise so we use a .then to get the response
           .then(res => res.json())
           // change to a string with a delete message, can get rid of data as well
           .then(() => resolve('Resource Deleted...'))
           // if theres an error we can catch it
           .catch(err => reject(err));
        });
       
    }

 }