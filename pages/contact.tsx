import Button from "components/button";
import { GetForm } from "util/getForm";
import { sprinkles, container } from "styles";

const inputWrapper = sprinkles({
  display: "flex",
  flexDirection: "column",
  marginY: "size-8",
});

const ContactPage = () => {
  const { register, handleSubmit, onSubmit, watch, errors } = GetForm();
  return (
    <div className={container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={inputWrapper}>
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
        <div className={inputWrapper}>
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
        <div className={inputWrapper}>
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
          <p className={sprinkles({ fontSize: "sm", color: "gray1" })}>
            {watch("subject")?.length || 0}/2000
          </p>
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <Button>送信する</Button>
      </form>
    </div>
  );
};

export default ContactPage;
