import { ProfileDto } from "../services/profile.dto";

export const profileService = {
  async saveProfile(data: ProfileDto): Promise<ProfileDto> {
    // Simulación de guardado
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
};