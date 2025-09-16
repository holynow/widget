;(function () {
  console.log('[cafe24-widget] script loaded')
  const root = document.getElementById('cafe24-widget-root')
  if (!root) return

  const isProductDetail = /product\/detail/.test(location.pathname)
  const isProductList = /product\/list|category/.test(location.pathname)
  // For local dev page, always render. In Cafe24, gate by path.
  const shouldRender = isProductDetail || isProductList || location.host.includes('localhost')
  if (!shouldRender) return

  // Debug text to ensure something is visible
  root.textContent = 'Widget loaded'
  root.style.position = 'fixed'
  root.style.right = '16px'
  root.style.bottom = '80px'
  root.style.padding = '6px 10px'
  root.style.background = 'rgba(17,17,17,0.6)'
  root.style.color = '#fff'
  root.style.borderRadius = '6px'
  root.style.fontSize = '12px'
  root.style.zIndex = '99998'

  const badge = document.createElement('div')
  badge.textContent = '🚀 Fast Shipping Available'
  badge.style.position = 'fixed'
  badge.style.right = '16px'
  badge.style.bottom = '16px'
  badge.style.padding = '10px 14px'
  badge.style.background = '#111'
  badge.style.color = '#fff'
  badge.style.borderRadius = '8px'
  badge.style.fontSize = '14px'
  badge.style.zIndex = '99999'
  root.appendChild(badge)
})()
