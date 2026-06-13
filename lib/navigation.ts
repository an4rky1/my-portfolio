export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const header = document.querySelector("header");
  const offset = header ? header.offsetHeight : 0;
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.pageYOffset - offset,
    behavior: "smooth",
  });
}
