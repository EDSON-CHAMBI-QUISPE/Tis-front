import React from "react";
import ProfileFormData from "../models/profile.model";
import { ProfileErrors } from "../utils/validation";

interface ProfileFormProps {
  formData: ProfileFormData;
  errors: ProfileErrors;
  loading: boolean;
  successMessage: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ProfileForm({
  formData,
  errors,
  loading,
  successMessage,
  onChange,
  onCancel,
  onSubmit,
}: ProfileFormProps) {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#112240] rounded-lg shadow-xl border border-[#233554] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#233554] flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#64ffda]">
            Configuración del Perfil
          </h2>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-8">
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Información Básica
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#8892b0] mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChange}
                  className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-2 focus:border-[#64ffda] outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-[#8892b0] mb-2">
                  Profesión / Título
                </label>
                <select
                  name="profession"
                  value={formData.profession}
                  onChange={onChange}
                  className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-2 focus:border-[#64ffda] outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ingeniero_software">Ingeniero de Software</option>
                  <option value="desarrollador_web">Desarrollador Web</option>
                  <option value="disenador_uiux">Diseñador UI/UX</option>
                  <option value="analista_datos">Analista de Datos</option>
                  <option value="devops">DevOps</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.profession && (
                  <p className="text-red-400 text-sm mt-1">{errors.profession}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-[#8892b0] mb-2">
                  Biografía Profesional
                </label>
                <textarea
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={onChange}
                  placeholder="Describe tu experiencia y metas..."
                  className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-2 focus:border-[#64ffda] outline-none"
                />
                {errors.bio && (
                  <p className="text-red-400 text-sm mt-1">{errors.bio}</p>
                )}
              </div>
            </div>
          </section>

          {successMessage && (
            <p className="text-green-400 text-sm">{successMessage}</p>
          )}

          <div className="flex flex-col md:flex-row md:justify-end space-y-3 md:space-y-0 md:space-x-4 pt-4 border-t border-[#233554]">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-lg font-bold disabled:opacity-50"
            >
              {loading ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}