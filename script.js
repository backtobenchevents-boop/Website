function sendWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const batch=document.getElementById('batch').value;
  const guests=document.getElementById('guests').value;
  const msg=document.getElementById('msg').value;
  const text=`Hi Back To Bench Events, my name is ${name}. I want to plan a reunion/get-together. Event/Batch: ${batch}. Guests: ${guests}. Details: ${msg}`;
  window.open(`https://wa.me/919652108404?text=${encodeURIComponent(text)}`,'_blank');
}