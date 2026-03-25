import { useCallback } from 'react'

export function useDownload(cardRef) {
  const download = useCallback(async () => {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#0d0b08',
      logging: false,
      allowTaint: true,
    })
    const link = document.createElement('a')
    link.download = 'hassan-merhan-engagement.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [cardRef])

  return { download }
}
