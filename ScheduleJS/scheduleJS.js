var checkbox103 = $("value=CAL103");
var checkbox123 = $("value=MA123");
var checkbox115 = $("value=CS115");
var checkbox146 = $("value=CS146");
var checkbox111 = $("value=PEP111");

function load(){
    var checkboxes = document.getElementsByTagName('input');

    // this takes all the checkboxes and unchecks them when the page is reloaded
    for (var i=0; i<checkboxes.length; i++)  {
        if (checkboxes[i].type == 'checkbox')   {
          checkboxes[i].checked = false;
        }
    }

    // alert('unchecked');
}

// so this function just runs whenever the checkboxes are checked/unchecked and runs the code accordingly
function toggle103(elem){
    if (elem.checked){
        // alert("Im checked"); test code
        // this needs to remove the 2 td elements and add one cal103

        $(".103remove").remove(); // this removes all of the <td> elements that need to be cleared for 103
        // prefab103.appendTo($(".103dest"));
        $(".103dest").after('<td rowspan="2" class="103">CAL103</td>'); // this adds the CAL103 element
    }
    else{
        // alert("im not checked"); test code
        // this needs to remove the cal103 and add 2 td elements
        $(".103").remove();
        $(".103dest").after('<td class="103remove"></td>');
        $(".103remdest").after('<td class="103remove"></td>')
    }
}
