export default function decorate(block) {
    const rows = [...block.children];
    const blog1 = rows[0];
    const blog2 = rows[1];
    const blog3 = rows[2];
    const blog4 = rows[3];
    const blog5 = rows[4];
    blog1.classList.add('blog1-row', 'blog');
    blog2.classList.add('blog2-row', 'blog');
    blog3.classList.add('blog3-row', 'blog');
    blog4.classList.add('blog4-row', 'blog');
    blog5.classList.add('blog5-row', 'blog');
    blog1.children[0].classList.add('blog1-title');
    blog1.children[1].classList.add('blog1-description');
    blog2.children[0].classList.add('blog2-title');
    blog2.children[1].classList.add('blog2-description');
    blog3.children[0].classList.add('blog3-title');
    blog3.children[1].classList.add('blog3-description');
    blog4.children[0].classList.add('blog4-title');
    blog4.children[1].classList.add('blog4-description');
    blog5.children[0].classList.add('blog5-title');
    blog5.children[1].classList.add('blog5-description');
}