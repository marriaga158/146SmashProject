var checkbox103 = $("value=CAL103");
var checkbox123 = $("value=MA123");
var checkbox115 = $("value=CS115");
var checkbox146 = $("value=CS146");
var checkbox111 = $("value=PEP111");

var colorPicker103;
var colorPicker123;
var colorPicker115;
var colorPicker146;
var colorPicker111;

function load(){
    var checkboxes = document.getElementsByTagName('input');

    // this takes all the checkboxes and unchecks them when the page is reloaded
    for (var i=0; i<checkboxes.length; i++)  {
        if (checkboxes[i].type == 'checkbox')   {
          checkboxes[i].checked = false;
        }
    }

    // this controls the color picker for 103
    colorPicker103 = document.getElementById('CAL103color');
    colorPicker103.addEventListener("change", function(e){
        var color = colorPicker103.value;
        $(".103").css("background-color", color);
    }, false);

    colorPicker123 = document.getElementById('MA123color');
    colorPicker123.addEventListener("change", function(e){
        var color = colorPicker123.value;
        $(".123").css("background-color", color);
    }, false);

    colorPicker115 = document.getElementById('CS115color');
    colorPicker115.addEventListener("change", function(e){
        var color = colorPicker115.value;
        $(".115").css("background-color", color);
    }, false);

    colorPicker146 = document.getElementById('CS146color');
    colorPicker146.addEventListener("change", function(e){
        var color = colorPicker146.value;
        $(".146").css("background-color", color);
    }, false);

    colorPicker111 = document.getElementById('PEP111color');
    colorPicker111.addEventListener("change", function(e){
        var color = colorPicker111.value;
        $(".111").css("background-color", color);
    }, false);
    // alert('unchecked');
}

// so this function just runs whenever the checkboxes are checked/unchecked and runs the code accordingly
function toggle103(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103
        $(".103remove").css("display", "none"); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".103dest").after('<td rowspan="2" class="103">CAL103</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".103").remove(); // removes 103
        //$(".103dest").after('<td class="103remove"></td>'); // adds the td elements
        //$(".103remdest").after('<td class="103remove"></td>')
        $(".103remove").css("display", "table-cell");
    }
}

function toggle123(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103

        $(".123remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".123dest").after('<td rowspan="2" class="123">MA123</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".123").remove(); // removes 103
        $(".123dest").after('<td class="123remove"></td>'); // adds the td elements
        $(".123remdest").after('<td class="123remove"></td>')
    }
}

function toggle115(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103

        $(".115remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".115dest").after('<td rowspan="2" class="115">CS115</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".115").remove(); // removes 103
        $(".115dest").after('<td class="115remove"></td>'); // adds the td elements
        $(".115remdest").after('<td class="115remove"></td>')
    }
}

function toggle146(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103

        $(".146remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".146dest").after('<td rowspan="2" class="146">CS146</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".146").remove(); // removes 103
        $(".146dest").after('<td class="146remove"></td>'); // adds the td elements
        $(".146remdest").after('<td class="146remove"></td>')
    }
}

function toggle111(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103

        $(".111remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".111dest").after('<td rowspan="2" class="111">PEP111</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".111").remove(); // removes 103
        $(".111dest").after('<td class="111remove"></td>'); // adds the td elements
        $(".111remdest").after('<td class="111remove"></td>')
    }
}

