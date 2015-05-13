var total = "";

function buttonCreator() {
    var controlBtns = "<button class='num btn-lg' value='+'>+</button>" +
                      "<button class='num btn-lg' value='-'>-</button>" +
                      "<button class='num btn-lg' value='*'>*</button>" +
                      "<button class='num btn-lg' value='/'>/</button>";
    $(".calcButtons").append("<div class='row'>" + controlBtns +"</div>");

    var count = 1;
    var buttons = "";
    for (var j = 1; j < 10; j++) {
        buttons += "<button class='num btn-lg' value=" + j + ">" + j + "</button>";
        if (count > 2) {
            if (j < 4){
                buttons += "<button class='num btn-lg' value='='>=</button>";
            } else if (j < 7 && j > 3) {
                buttons += "<button class='num btn-lg' value='c'>C</button>";
            } else if (j < 10 && j > 6) {
                buttons += "<button class='num btn-lg' value='0'>0</button>";
            }

            $(".calcButtons").append("<div class='row'>" + buttons + "</div>");
            buttons = "";
            count = 0;
        }
        count++;
    }
}

$(document).ready(function(){
    buttonCreator();

    $(".num").on('click', function(){
        var val = $(this).val();
        var value = val.toString();

        if (value == "=") {
            console.log("Equals happens textVal: ", total);
            total = eval(total);
            console.log(total);
            $(".calcTextbox").text(total);
            total = "";
        } else if (value =="c") {
            $(".calcTextbox").empty();
            total = "";
        } else {
            console.log(value);
            $(".calcTextbox").append(value);
            total += value;
            value = "";

        }
    });

});