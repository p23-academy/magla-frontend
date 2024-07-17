import {Form, json, redirect, useActionData} from "react-router-dom";
import {useState} from "react";
import {registerUser} from "../../data/auth/authRepo.js";
import FormInput from "../components/forms/FormInput.jsx";
import BigButton from "../components/buttons/BigButton.jsx";

export const registerAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const response = await registerUser(email, password)
  if (response.status === 200) {
    return redirect("/login")
  } else {
    return json(response.data)
  }
}

const RegisterView = () => {
  const actionData = useActionData()

  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  return (
    <div className={"w-screen h-screen flex items-center justify-center bg-orange-100"}>
      <Form method="post">
        <div className="flex flex-col w-96 items-center bg-white p-4 rounded-lg gap-2">
          <h1 className={"text-2xl font-bold"}>Registracija</h1>
          <FormInput type={"email"} name={"email"} label={"Email"} required={true} vertical={true}/>
          <FormInput
            type={"password"}
            name={"password"}
            label={"Šifra"}
            required={true}
            vertical={true}
            value={password1}
            onChange={e => setPassword1(e.target.value)}
          />
          <FormInput
            type={"password"}
            label={"Šifra"}
            required={true}
            vertical={true}
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          {actionData?.error && <p className={"text-lg text-red-500"}>{actionData.error}</p>}
          <BigButton
            type={"submit"}
            text={"Registriraj se"}
            disabled={password1.length === 0 || password1 !== password2}
          />
        </div>
      </Form>
    </div>
  )
}

export default RegisterView