function countWordsAndCharacters(htmlElementId) {
  // Get the HTML element by its ID
  var element = document.getElementById(htmlElementId);

  // Check if the element exists
  if (element) {
    // Remove HTML tags to get the plain text content
    var textContent = element.textContent || element.innerText;
    console.log(textContent);

    // Calculate word count
    var words = textContent.split(/\s+/);
    var wordCount = words.filter(function (word) {
      return word.length > 0;
    }).length;

    // Calculate character count
    var characterCount = textContent.length;
    console.log(wordCount, characterCount);
    // Return an object with word count and character count
    return {
      wordCount: wordCount,
      characterCount: characterCount,
    };
  } else {
    return {
      wordCount: 0,
      characterCount: 0,
    };
  }
}
export default countWordsAndCharacters;
