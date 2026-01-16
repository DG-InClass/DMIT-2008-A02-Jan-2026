/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
document
    .querySelector('form')
    .addEventListener('submit', (ev) => {
        ev.preventDefault();  // the form does NOT submit to the backend
        const theForm = ev.target; // <form>
        const formControls = theForm.elements;
        const topicInput = formControls['new-topic']; // <input type="text" name="new-topic"
        // recall we need to use index \___________/ because the name has a hypen
        const topic = topicInput.value; // .value gives us the content of the input control
        console.log(topic);

        if(topic.trim() === '') {
            // Bad input 😢
            topicInput.classList.add('is-invalid'); // this CSS class is from Bootstrap
        } else {
            // Good input
            const list = document.querySelector('ul'); // there is only one <ul> on the page
            list.appendChild(createListItem(topic.trim()));
            topicInput.value = ''; // clear the input
            topicInput.classList.remove('is-invalid');
        }
    });


function createListItem(text) {
    const liElement = document.createElement('li');
    const textNode = document.createTextNode(text);
    liElement.appendChild(textNode);
    return liElement;
}
