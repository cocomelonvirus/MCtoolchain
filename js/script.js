const npX = document.getElementById('xcoord');
const npZ = document.getElementById('zcoord');
const Calcotn = document.getElementById('otn');
const Calcnto = document.getElementById('nto');

Calcotn.addEventListener('click', () => {
    let TranInp1 = parseInt(npX.value, 10);
    let TranInp2 = parseInt(npZ.value, 10);
    let TranFC1 = Math.trunc(TranInp1 / 8);
    let TranFC2 = Math.trunc(TranInp2 / 8);
    document.getElementById('np').innerHTML ="X: " + TranFC1 + " Z: " + TranFC2;
});

Calcnto.addEventListener('click', () => {
    let TranInp1 = parseInt(npX.value, 10);
    let TranInp2 = parseInt(npZ.value, 10);
    let TranFC1 = Math.trunc(TranInp1 * 8);
    let TranFC2 = Math.trunc(TranInp2 * 8);
    document.getElementById('np').innerHTML ="X: " + TranFC1 + " Z: " + TranFC2;
});