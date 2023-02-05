const array_value = ['pakistan', 199 , 'islamabad', 255, 555, 'ayesha']

var num_array = [];
var str_array = [];
array_value.forEach(Element => {
    
    if(typeof(Element) == 'number'){
        num_array.push(Element);

    }
    else if (typeof(Element) == 'string'){
        str_array.push(Element);

    }
});
console.log(array_value);
console.log(num_array);
console.log(str_array);