const dialog = document.querySelector('.photo-dialog');
let opener;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.photo-open').forEach(button => button.addEventListener('click', () => {
    opener = button;
    const photo = dialog.querySelector('img');
    photo.src = button.dataset.photo;
    photo.alt = button.querySelector('img').alt;
    dialog.querySelector('p').textContent = button.dataset.caption;
    dialog.showModal();
  }));
  dialog.querySelector('.close-photo').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => opener?.focus());
}
const itineraryDetails = [...document.querySelectorAll('.itinerary-days details')];
let openBeforePrint = [];
window.addEventListener('beforeprint', () => {
  openBeforePrint = itineraryDetails.map(item => item.open);
  itineraryDetails.forEach(item => { item.open = true; });
});
window.addEventListener('afterprint', () => {
  itineraryDetails.forEach((item,index) => { item.open = openBeforePrint[index] ?? item.open; });
});
document.querySelector('.print-button')?.addEventListener('click', () => window.print());
