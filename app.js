const closeBtn = document.getElementById('close-btn')
const introModal = document.getElementById('intro-modal')

function hideOverlay() {
        introModal.style.height = 0
        introModal.style.overflow = 'hidden'
    setTimeout(() => { 
        introModal.style.border = 'none'
    }, 900);
}

closeBtn.addEventListener('click', function() {
    hideOverlay()
    console.log('clicked')
})
