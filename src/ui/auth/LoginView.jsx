import {Form, json, redirect, useActionData} from "react-router-dom";
import {loginUser} from "../../data/auth/authRepo.js";
import FormInput from "../components/forms/FormInput.jsx";
import BigButton from "../components/buttons/BigButton.jsx";

export const loginAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const response = await loginUser(email, password)
  if (response.status === 200) {
    const token = response.data.token
    localStorage.setItem("token", token)
    return redirect("/shop/all")
  } else {
    return json(response.data)
  }
}

const LoginView = () => {
  const actionData = useActionData()

  return (
    <div className={"w-screen h-screen flex items-center justify-center bg-orange-100"}>
      <Form method="post">
        <div className="flex flex-col w-96 items-center bg-white p-4 rounded-lg gap-2">
          <h1 className={"text-2xl font-bold"}>Prijava</h1>
          <FormInput type={"email"} name={"email"} label={"Email"} required={true} vertical={true} />
          <FormInput type={"password"} name={"password"} label={"Šifra"} required={true} vertical={true} />
          {actionData?.error && <p className={"text-lg text-red-500"}>{actionData.error}</p>}
          <BigButton type={"submit"} text={"Prijavi se"}/>
        </div>
      </Form>
    </div>
  )
}

export default LoginView