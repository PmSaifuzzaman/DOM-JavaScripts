//1. Add event listenar to the post button
document.getElementById('btn-post').addEventListener("click", function(){
    // 2.Getting the comment box
    const commentBox = document.getElementById('input-comment');
    // 3.Getting the comment box value
    const newComment = commentBox.value;
    // 4.Getting the div in which the value append
    const commentContainer = document.getElementById('comment-container');
    // Creating element
    const p = document.createElement('p');
    p.innerText = newComment;
    // Append comment
    commentContainer.appendChild(p);
    // Clear Text area inner value
    commentBox.value = '';
});