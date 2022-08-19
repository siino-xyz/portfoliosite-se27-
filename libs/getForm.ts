import { useForm } from "react-hook-form";
import { FormInputs } from "types";

export const GetForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs, e: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    fetch("https://getform.io/f/6e829c97-4064-4818-bdb4-1c3b491869c5", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        e.target.reset();
        location.href = "https://se-27.vercel.app/thanks";
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  return { register, handleSubmit, onSubmit, watch, errors };
};
