//  this sets the first display to hidden
document.getElementById('output').style.visibility = 'hidden';

//  This calculates the weight
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('grams-output').innerHTML = lbs / 0.0022046;
    document.getElementById('Kg-output').innerHTML = lbs / 2.2046;
    document.getElementById('Os-output').innerHTML = lbs * 16;
});









