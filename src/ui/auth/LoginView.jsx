import {Form, json, redirect, useActionData} from "react-router-dom";
import {loginUser} from "../../data/auth/authRepo.js";

export const loginAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const response = await loginUser(email, password)
  if (response.status === 200) {
    const token = response.data.token
    localStorage.setItem("token", token)
    return redirect("/app")
  } else {
    return json(response.data)
  }
}

const LoginView = () => {
  const actionData = useActionData()

  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <Form method="post">
        <div className="flex flex-col w-64 bg-gray-200 p-2 rounded-lg gap-1">
          <h1 className={"text-lg font-bold"}>Prijava</h1>
          <input
            required
            type={"email"}
            name={"email"}
            placeholder={"E-mail"}
          />
          <input
            required
            type={"password"}
            name={"password"}
            placeholder={"Šifra"}
          />
          {actionData?.error && <p className={"text-lg text-red-500"}>{actionData.error}</p>}
          <button
            type={"submit"}
          >
            Prijavi se
          </button>
        </div>
      </Form>
    </div>
  )
}

export default LoginView