var checkbox103 = $("value=CAL103");
var checkbox123 = $("value=MA123");
var checkbox115 = $("value=CS115");
var checkbox146 = $("value=CS146");
var checkbox111 = $("value=PEP111");

var colorPicker103;

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


    // alert('unchecked');
}

// so this function just runs whenever the checkboxes are checked/unchecked and runs the code accordingly
function toggle103(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the td elements and add one cal103

        $(".103remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".103dest").after('<td rowspan="2" class="103">CAL103</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add td elements
        $(".103").remove(); // removes 103
        $(".103dest").after('<td class="103remove"></td>'); // adds the td elements
        $(".103remdest").after('<td class="103remove"></td>')
    }
}

