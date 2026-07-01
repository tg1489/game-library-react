/*

When the <a>Submit</a> is clicked on, it will target the <form>
and then attach the submit function to the form.

 */
document.getElementById("note-submit").onclick = function() {
  document.getElementById("note-form").submit();
};


function playMusic(url) {

 let audio = new Audio(url);
  audio.volume = 0.2;
  audio.play()
}

$("label").click(function() {
  $(this).css("text-decoration", "line-through");
});
