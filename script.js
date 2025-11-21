function to_display(character){
    console.log('to_display: ');
    on_display = document.getElementById('id_display').value;
    on_display = on_display + character.value;
    document.getElementById('id_display').value = on_display;
}
 
let expression = '';
 
function operator(character){
    console.log('operator: ');
    on_display = document.getElementById('id_display').value;
    expression = expression + on_display + character.value;
    document.getElementById('id_display').value = '';
    console.log(expression);
}

function result(){
    console.log('result: ');
    let on_display = document.getElementById('id_display').value;
    expression = expression + on_display;
    console.log(expression);    
    let to_display = eval(expression);
    document.getElementById('id_display').value = to_display;
    expression = '';   
} 