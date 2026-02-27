// ~/utils/apiCalls.js

const fetchAllReviews = () => {
    return fetch('http://localhost:5000/reviews')
        .then(handleJsonResponse)
        .catch(summarizeError);
}

const postNewReview = (data) => {
    return fetch('http://localhost:5000/reviews', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(handleJsonResponse)
    .catch(summarizeError);
}

/**
 * Summarizes the error message for a uniform experience in the front end.
 * @param {Error} err The error that was thrown
 */
const summarizeError = (err) => {
    const message = `The reviews service is not available at this time. (${err.message})`;
    // Rethrow this error with the updated message
    throw new Error(message, { cause: err });
}

/**
 * Processes a Response from a fetch call to some REST API where the expected response is JSON data.
 * @param {Response} res The response from the server endpoint
 * @returns {object} The JSON data converted to a JavaScript object
 */
const handleJsonResponse = (res) => {
    // Check for the correct status code (200 range)
    if(!res.ok) {
        throw new Error(`The server responded with the code ${res.status}: "${res.statusText}"`);
    }
    // Expect the server to return a JSON response
    const contentType = res.headers.get('content-type');
    if(!contentType || !contentType.includes('application/json')) {
        throw new Error(`Expected a JSON response, but got: ${contentType || "unknown"}`);
    }

    // Everything should be fine if I reached this point
    return res.json();
}

export { fetchAllReviews, postNewReview }
