interface ImageUrl {
    relativeUrl: string | null | undefined;
  }

export const getFullImageUrl = (relativeUrl: ImageUrl['relativeUrl']): string | null => {
    if (!relativeUrl) return null;
    
    // Check if the URL is already absolute
    if (relativeUrl.startsWith('http://') || relativeUrl.startsWith('https://')) {
      return relativeUrl;
    }
    
    const apiBaseUrl: string = 'http://10.140.243.43:1338';
    return `${apiBaseUrl}${relativeUrl}`;
  };
  