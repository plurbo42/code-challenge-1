console.log('js sourced')

$(document).ready(onReady);

function onReady(){
    console.log('jquery sourced');
    $('#generate').on('click', generateDiv);
    $('#divSection').on('click', '.switchButton', switchColor);
    $('#divSection').on('click', '.deleteDivButton', deleteDiv);
}

var clickCount = 0;

function generateDiv(){
    console.log('in generateDiv')
    clickCount++;
    $('.generatedDivs').append('<div class="newDivs"></div>')
    $('.newDivs').last().append('<p class="clickCounter">'+ clickCount +'</p>')
    $('.newDivs').last().append('<button class="switchButton">Switch</button>')
    $('.newDivs').last().append('<button class="deleteDivButton">Delete</button>')
}

function deleteDiv(){
    console.log('in deleteDiv');
    $(this).parent().remove()
}

function switchColor(){
    console.log('in switchColor');
    $(this).parent().toggleClass('yellowDivs')
}