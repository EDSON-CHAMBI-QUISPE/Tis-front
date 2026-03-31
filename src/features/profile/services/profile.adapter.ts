import { ProfileDto } from "../services/profile.dto";
import { ProfileFormData, ProfileResponse } from "../models/profile.model";

export const profileAdapter = {
  toDto(data: ProfileFormData): ProfileDto {
    return {
      full_name: data.fullName,
      profession: data.profession,
      bio: data.bio,
    };
  },

  fromDto(dto: ProfileDto): ProfileResponse {
    return {
      fullName: dto.full_name,
      profession: dto.profession,
      bio: dto.bio,
    };
  },
};