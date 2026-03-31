import { ProfileFormData } from "../models/profile.model";

export interface ProfileErrors {
  fullName?: string;
  profession?: string;
  bio?: string;
}

export const validateProfile = (data: ProfileFormData): ProfileErrors => {
  const errors: ProfileErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "El nombre completo es obligatorio";
  }

  if (!data.profession.trim()) {
    errors.profession = "La profesión es obligatoria";
  }

  if (!data.bio.trim()) {
    errors.bio = "La biografía es obligatoria";
  } else if (data.bio.trim().length < 10) {
    errors.bio = "La biografía debe tener al menos 10 caracteres";
  }

  return errors;
};