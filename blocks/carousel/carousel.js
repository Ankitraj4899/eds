export default function decorate(block) {
    const rows = [...block.children];
    const carousel1 = rows[0];
    const carousel2 = rows[1];
    const carousel3 = rows[2];
    carousel1.classList.add('carousel-item');
    carousel2.classList.add('carousel-item');
    carousel3.classList.add('carousel-item');
    const image1 = carousel1.querySelector('img');
    const heading1 = carousel1.querySelector('h2');
    const description1 = carousel1.querySelector('p')
    const image2 = carousel2.querySelector('img');
    const heading2 = carousel2.querySelector('h2');
    const description2 = carousel2.querySelector('p');
    const image3 = carousel3.querySelector('img');
    const heading3 = carousel3.querySelector('h2');
    const description3 = carousel3.querySelector('p');
    image1.classList.add('carousel-image');
    heading1.classList.add('carousel-heading');
    description1.classList.add('carousel-description');
    image2.classList.add('carousel-image');
    heading2.classList.add('carousel-heading');
    description2.classList.add('carousel-description');
    image3.classList.add('carousel-image');
    heading3.classList.add('carousel-heading');
    description3.classList.add('carousel-description');
    let currentIndex = 0;
    carousel1.classList.add('active');
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    block.append(nextButton);
    nextButton.addEventListener('click', () => {
        rows[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % rows.length;
        rows[currentIndex].classList.add('active');
    });
}