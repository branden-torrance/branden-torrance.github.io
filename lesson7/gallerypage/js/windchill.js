const t = parseFloat(document.getElementById('temp').textContent);
const s = parseFloat(document.getElementById('speed').textContent);

let windchill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

windchill = Math.round(windchill);

if(t <= 50 && s > 3) {
    document.getElementById("chill").textContent = windchill + "\xB0F";
} 
else {
    document.getElementById("chill").textContent = "None"
}