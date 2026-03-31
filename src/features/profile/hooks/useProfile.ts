import { useState } from "react";
import  ProfileFormData  from "../models/profile.model";
import { validateProfile, ProfileErrors } from "../utils/validation";
import { profileAdapter } from "../services/profile.adapter";
import { profileService } from "../services/profile.service";

const initialState: ProfileFormData = {
  fullName: "Juan Pérez",
  profession: "",
  bio: "",
};

export const useProfile = () => {
  const [formData, setFormData] = useState<ProfileFormData>(initialState);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleCancel = () => {
    setFormData(initialState);
    setErrors({});
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateProfile(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      setSuccessMessage("");

      const dto = profileAdapter.toDto(formData);
      await profileService.saveProfile(dto);

      setSuccessMessage("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    successMessage,
    handleChange,
    handleCancel,
    handleSubmit,
  };
};