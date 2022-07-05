var submitEl = $(".submitBtn")


$( function() {
    $( ".searchOptions" ).selectmenu();
 ;
  } );

function handleSubmit() {
    var searchQuery = $("#searchInput").val()
    var formatInput = $("searchOptions").find(":selected").text()
    console.log(searchQuery)
    console.log(formatInput)
}

submitEl.on("click", handleSubmit)