// javascript
// 1 meter = 3.28084 feet
// 0.3048 meters = 1 foot
// 1 liter = 0.264172 gallons
// 1 gallon = 3.78541 liters
// 1 kg = 2.20462 pounds
// 1 lbs = 0.453592 kg

const convertBtn = document.getElementById("convert")
const lengthText = document.getElementById("lt")
const volumeText = document.getElementById("vt")
const massText = document.getElementById("mt")
const valInput = document.getElementById("val")

const converter = (num)=>{
    lengthText.textContent = `
        ${num} meters = ${(num * 3.28084).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} meters
    `
    volumeText.textContent = `
        ${num} liters = ${(num * 0.264172).toFixed(3)} gallons | ${num} gallons = ${(num * 3.78541).toFixed(3)} liters
    `
    massText.textContent = `
        ${num} kilos = ${(num * 2.20462).toFixed(3)} pounds | ${num} pounds = ${(num * 0.453592).toFixed(3)} kilos
    `
}

if(localStorage.getItem("current")){
    valInput.value = localStorage.getItem("current")
    converter(Number(localStorage.getItem("current")))
}

convertBtn.addEventListener("click", ()=>{
    if(valInput.value != null && valInput.value != ""){
        converter(valInput.value)
        localStorage.setItem("current", valInput.value)
    }
})

