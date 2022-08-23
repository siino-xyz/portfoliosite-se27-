import Button from "components/button/button";
import { GetForm } from "libs/getForm";

const ContactPage = () => {
  const { register, handleSubmit, onSubmit, watch, errors } = GetForm();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">お名前*</label>
          <input
            autoComplete="name"
            {...register("name", {
              required: "お名前を入力してください。",
              maxLength: {
                value: 50,
                message: "最大50文字です",
              },
            })}
            type="text"
            id="name"
            name="name"
          />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="email">メールアドレス*</label>
          <input
            autoComplete="email"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "正しいメールアドレスの形式で入力してください。",
              },
            })}
            type="email"
            id="email"
            name="email"
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="subject">お問い合わせ内容</label>
          <textarea
            {...register("subject", {
              required: "必須入力です。",
              maxLength: {
                value: 2000,
                message: "最大2000文字です",
              },
            })}
            id="subject"
            name="subject"
          />
          <p>{watch("subject")?.length || 0}/2000</p>
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <Button>送信する</Button>
      </form>
    </div>
  );
};

export default ContactPage;
