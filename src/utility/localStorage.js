/* eslint-disable no-unused-vars */
const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation-done');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
}
const saveDonation= id =>{
const storedDonation = getStoredDonation()
const exists = storedDonation.find(donationId=> donationId ===id)
if(!exists){
    storedDonation.push(id);
    localStorage.setItem('donation-done',JSON.stringify(storedDonation))
}



}
export {getStoredDonation,saveDonation}