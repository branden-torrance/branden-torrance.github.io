document.getElementById("submitButton").addEventListener("click", function() {      // creates event listener for the click of "Add Chapter" button.

    let chapter = document.getElementById("favchap").value;     // creates variable to take the value provided in the text box

    if (chapter !== "") {
        const deleteButton = document.createElement("button");  // creates variable that creates a <button> element
        deleteButton.innerHTML = "\u274C";                      // sets a red x symbol for <button> text

        const listItem = document.createElement("li");          // creates a new <list> element
        listItem.textContent = chapter;                         // sets the content of the <list> element to show the text from the variable "chapter"
        listItem.appendChild(deleteButton);                     // adds the <button> created in line #6 to the <list> element that is created on line #9

        document.getElementById("list").appendChild(listItem);  // adds the text and delete button into an unordered list item


        document.getElementById("favchap").value = "";          // clears the text box after the button has been clicked


        deleteButton.addEventListener("click", function() {     // creates event listener for deleteButton click. Deletes the list item created
            list.removeChild(listItem)
            favchap.focus();
        });

        favchap.focus();                                        // sets focus on input text box once item has been added

    }// end of if statement
    
});