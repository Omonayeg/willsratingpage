
    $("button").on("click", function(e) {
        e.preventDefault()
     
var card2 = $(".card-2")
var card = $(".card")
var rated = $(".selected")
var rate = $('input[name="rating"]:checked').val()

    if ( rate == null) {
     alert ("Please select a rating.")
    }
    else  {         
        rated.textCcontent = rate
        card2.removeClass("hide")
        card.addClass("hide")
        alert("You Selected " + rate + " out of 5")}
    })