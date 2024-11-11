// contentScript.js - make sure this script is a module
export function incrementUpvote() {
    let upvotes = parseInt(document.getElementById("upvoteCount").textContent, 10);
    upvotes++;
    document.getElementById("upvoteCount").textContent = upvotes;
    // Implement other logic to update the model, scale, etc.
}

export function incrementDownvote() {
    let downvotes = parseInt(document.getElementById("downvoteCount").textContent, 10);
    downvotes++;
    document.getElementById("downvoteCount").textContent = downvotes;
    // Implement other logic to update the model, scale, etc.
}
