"use client";

import { useForm } from "react-hook-form";
import { sendForm, ContactFormData } from "@/actions/send-form";
import { LoaderCircle, User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";

export const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await sendForm(data);
    reset();
  };

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center h-full space-y-6 bg-[var(--negro)]/50 backdrop-blur-sm p-6 border border-[var(--gris)]/30"
      >

        {/* Fila 1: Nombre y Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="nombre" className="flex items-center gap-2 text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
              <User className="w-4 h-4 text-[var(--verde)]" />
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              className={`w-full px-4 py-3 bg-transparent border-b-2 ${
                errors.nombre ? "border-red-400" : "border-[var(--gris)]"
              } text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300 placeholder-gray-500`}
              placeholder="Tu nombre completo"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="flex items-center gap-2 text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
              <Mail className="w-4 h-4 text-[var(--verde)]" />
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-3 bg-transparent border-b-2 ${
                errors.email ? "border-red-400" : "border-[var(--gris)]"
              } text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300 placeholder-gray-500`}
              placeholder="tu@email.com"
              {...register("email", {
                required: "El correo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Dirección de correo inválida",
                },
              })}
            />
          </div>
        </div>

        {/* Fila 2: Teléfono y Servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="telefono" className="flex items-center gap-2 text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
              <Phone className="w-4 h-4 text-[var(--verde)]" />
              Teléfono (opcional)
            </label>
            <input
              id="telefono"
              type="tel"
              className={`w-full px-4 py-3 bg-transparent border-b-2 ${
                errors.telefono ? "border-red-400" : "border-[var(--gris)]"
              } text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300 placeholder-gray-500`}
              placeholder="Tu número de teléfono"
              {...register("telefono", {
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Ingresa un número de 9 dígitos",
                },
              })}
            />
          </div>

          <div className="relative">
            <label htmlFor="servicio" className="block text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
              Servicio de interés
            </label>
            <select
              id="servicio"
              className={`w-full px-4 py-3 bg-transparent border-b-2 ${
                errors.servicio ? "border-red-400" : "border-[var(--gris)]"
              } text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300`}
              {...register("servicio", { required: "Selecciona un servicio" })}
            >
              <option value="" className="bg-[var(--negro)] text-[var(--blanco)]">Selecciona una opción</option>
              <option value="automatizacion" className="bg-[var(--negro)] text-[var(--blanco)]">Automatización</option>
              <option value="audiovisual" className="bg-[var(--negro)] text-[var(--blanco)]">Producción Audiovisual</option>
              <option value="desarrollo" className="bg-[var(--negro)] text-[var(--blanco)]">Desarrollo de Software</option>
              <option value="consultoria" className="bg-[var(--negro)] text-[var(--blanco)]">Consultoría Técnica</option>
              <option value="otro" className="bg-[var(--negro)] text-[var(--blanco)]">Otro</option>
            </select>
          </div>
        </div>

        {/* Empresa (campo completo) */}
        <div className="relative">
          <label htmlFor="empresa" className="flex items-center gap-2 text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
            <Briefcase className="w-4 h-4 text-[var(--verde)]" />
            Empresa (opcional)
          </label>
          <input
            id="empresa"
            type="text"
            className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--gris)] text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300 placeholder-gray-500"
            placeholder="Nombre de tu empresa"
            {...register("empresa")}
          />
        </div>

        {/* Mensaje (campo completo) */}
        <div className="relative">
          <label htmlFor="mensaje" className="flex items-center gap-2 text-[var(--blanco)] mb-2 font-medium text-sm uppercase tracking-wide">
            <MessageSquare className="w-4 h-4 text-[var(--verde)]" />
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={4}
            className={`w-full px-4 py-3 bg-transparent border-b-2 ${
              errors.mensaje ? "border-red-400" : "border-[var(--gris)]"
            } text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)] transition-all duration-300 placeholder-gray-500 resize-none`}
            placeholder="Cuéntanos sobre tu proyecto"
            {...register("mensaje", {
              required: "El mensaje es requerido",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-transparent border-2 border-[var(--verde)] text-[var(--verde)] font-medium rounded-lg hover:bg-[var(--verde)] hover:text-[var(--negro)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <LoaderCircle className="animate-spin h-5 w-5 text-[var(--verde)]" />
          )}
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
  );
};
