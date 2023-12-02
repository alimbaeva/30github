let name='Asel';

function showName () {
    console.log(name);
}

setTimeout(()=>{
    let name="Petya";
    showName();
}, 1000);