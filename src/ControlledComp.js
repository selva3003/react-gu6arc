/* 
1. In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
Here, the React state is the “single source of truth”. An input form element whose value is controlled by React in this way is called a “controlled component”.

2. By default the page gets refereshed in the HTML form OnSubmit action. to prevent that call event.preventDefault() in the handleSubmit function.

*/
