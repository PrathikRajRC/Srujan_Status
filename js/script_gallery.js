document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.caption').textContent;

            const modalImage = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');

            modalImage.src = imgSrc;
            modalCaption.textContent = caption;

            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    });
});
