var submitEl = $(".submitBtn")


$( function() {
    $( ".searchOptions" ).selectmenu();
 ;
  } );

function handleSubmit(event) {
    event.preventDefault()
    var searchQuery = $("#searchInput").val()
    var formatInput = $(".searchOptions").val()
    console.log(searchQuery)
    console.log(formatInput)
    document.location.replace("./resultspage.html?q=" + searchQuery + "&format=" + formatInput)
}

submitEl.on("click", handleSubmit)