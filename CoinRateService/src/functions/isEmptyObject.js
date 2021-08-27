/**
 * Check object is empty or not.
 * If object is empty, return true.
 * @param {boolean} data 
 * @returns 
 */
export const isEmptyObject = (data) => {
    if(Object.keys(data).length == 0){
        return true;
    }
    else{
        return false;
    }
}