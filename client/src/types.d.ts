interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js' | 'set' | 'consent', 
    targetOrAction: string | Date, 
    params?: Record<string, string | number | boolean | object | null | undefined>
  ) => void;
  dataLayer?: Array<Record<string, unknown>>;
}