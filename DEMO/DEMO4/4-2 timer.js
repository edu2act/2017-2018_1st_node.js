//同步
console.log('start1');
setTimeout(console.log('延迟3秒'),3000);
console.log('end1');
//异步
console.log('start2');
setTimeout(function(){
    console.log('延迟5秒');
},5000);
console.log('end2');
