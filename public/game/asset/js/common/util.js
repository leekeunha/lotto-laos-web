const withComma = function(numbers){
    // add comma
    if( (/^[0-9\,]+$/).test(numbers) == false || numbers == 0 ){
        return 0;
    }else{
        let n = (numbers + '');
        const reg = /(^[+-]?\d+)(\d{3})/;
        while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

        return n;
    }
}
const delComma = function(numbers){
    // del comma
    if( (/^[0-9\,]+$/).test(numbers) == false || numbers == 0 ){
        return numbers;
    }else{
        const reg = new RegExp(/\,/gi);
        let replace_ = numbers.toString().replace(reg, "");
        replace_ = Number(replace_);
        return replace_;
    }
}
const numberWithZero = function(numbers){
    if(!isNaN(numbers)){
        if( numbers < 10 ) {
            numbers = "0"+ numbers
        }
    }
    return numbers;
}

// post data
postData = (function(){})
postData.parent = function(event_name, request_data= {}) {
    // console.log('post_messages: parent');
    const data = new Object
    data.name = event_name
    data.data = request_data
    return event_name ? window.parent.postMessage(data, location.origin) : false;
}
postData.child = function(event_name, request_data= {}) {
    // console.log('post_messages: child');
    const data = new Object
    data.name = event_name
    data.data = request_data

    const child = document.getElementById("Ifrm")
    return event_name ? child.contentWindow.postMessage(data, location.origin) : false;
}