export async function shareInvitation() {
  const data = {
    title: 'Hassan & Merhan — Engagement',
    text: 'Join us to celebrate our engagement on April 5, 2026!',
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(data)
    } catch {
      // User cancelled — no action needed
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href)
      return 'copied'
    } catch {
      // Clipboard not available
    }
  }
}
