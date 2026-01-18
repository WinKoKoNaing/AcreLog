export function getApiBaseUrl() {
  // Web (Next.js / Node)
  //   console.log(process.env.API_URL, process.env.NEXT_PUBLIC_API_URL);
  //   if (typeof window === 'undefined') {
  //     return process.env.NEXT_PUBLIC_API_URL!;
  //   }

  // Client-side (Web + Expo)
  return process.env.NEXT_PUBLIC_API_URL!;
}
