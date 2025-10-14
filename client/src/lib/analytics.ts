/**
 * Track custom events in Google Analytics
 */
export function trackEvent(
  action: string,
  category: string,
  label: string,
  value?: number
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value ?? null,
  });
}

export function trackEngagement(
  elementId: string,
  action: 'click' | 'view' | 'scroll' | 'hover'
) {
  trackEvent(action, 'engagement', elementId);
}

export function trackConversion(
  conversionType: 'contact' | 'quote' | 'newsletter' | 'download',
  source?: string
) {
  trackEvent('conversion', conversionType, source || 'website');
}