export default function decorate(block) {
  const rows = [...block.children];
  const titleRow = rows[0];
  const descriptionRow = rows[1];
  const categoryRow = rows[2];
  const linkRow = rows[3];
  titleRow.classList.add('announcement-title-row');
  descriptionRow.classList.add('announcement-description-row');
  categoryRow.classList.add('announcement-category-row');
  linkRow.classList.add('announcement-link-row');
  titleRow.children[0].classList.add('announcement-title-label');
  titleRow.children[1].classList.add('announcement-title');
  descriptionRow.children[0].classList.add('announcement-description-label');
  descriptionRow.children[1].classList.add('announcement-description');
  categoryRow.children[0].classList.add('announcement-category-label');
  categoryRow.children[1].classList.add('announcement-category');
  linkRow.children[0].classList.add('announcement-link');
}