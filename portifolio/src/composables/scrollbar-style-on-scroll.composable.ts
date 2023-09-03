const SCROLL_ON_TOP_CLASS = 'scroll-on-top';

function onScrollHandler() {
  if (document.documentElement.scrollTop === 0) {
    document.body.classList.add(
      SCROLL_ON_TOP_CLASS,
    );

  } else {
    document.body.classList.remove(
      SCROLL_ON_TOP_CLASS,
    );
  }
}

export function useScrollbarStyleOnScroll() {
  window.onscroll = onScrollHandler;

  onScrollHandler();
}
