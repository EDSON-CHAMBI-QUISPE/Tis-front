export default interface ProfileFormData {
  fullName: string;
  profession: string;
  bio: string;
}

export interface ProfileResponse {
  id?: number;
  fullName: string;
  profession: string;
  bio: string;
}