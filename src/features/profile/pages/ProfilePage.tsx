import React from "react";
import ProfileForm from "../components/ProfileForm";
import { useProfile } from "../hooks/useprofile";

export default function ProfilePage() {
  const {
    formData,
    errors,
    loading,
    successMessage,
    handleChange,
    handleCancel,
    handleSubmit,
  } = useProfile();

  return (
    <ProfileForm
      formData={formData}
      errors={errors}
      loading={loading}
      successMessage={successMessage}
      onChange={handleChange}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
}