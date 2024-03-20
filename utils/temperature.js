
const UNITS ={
    celsius:"C",
    far:"F"
}

function convertTempTo(temp, unitTo){
    if(unitTo === UNITS.celsius){
        return (temp - 32) / 1.8;
    } else if(unitTo === UNITS.far){
        return (temp * 1.8) + 32;
    } else {
        throw new Error("Invalid Unit");
    }
}

function isIceTemp(temp,unit){
    if(unit===UNITS.celsius){
        return temp <= 0;
    }
    else if(unit === UNITS.far){
        return temp <= 32
    }
    else{
        throw new Error("Invalid Unit")
    }


}

function getOppUnit(unit){
    return unit === UNITS.celsius ? UNITS.far : UNITS.celsius;
}
export {UNITS, convertTempTo, getOppUnit, isIceTemp};