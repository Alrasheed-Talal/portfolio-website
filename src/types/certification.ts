export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  logo?: string;
}
