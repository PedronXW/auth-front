import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import logo from '../assets/logo.png'
import NameEmailForm from '../components/Forms/NameEmailForm'
import PasswordForm from '../components/Forms/PasswordForm'
import { api } from '../lib/axios'

export type RegisterFormState = 'NameEmail' | 'Password'

const Register = () => {
  const [formsState, setFormsState] = useState<RegisterFormState>('NameEmail')

  const createPersonFormSchema = z.object({
    email: z
      .string()
      .email('Formato de e-mail invalido')
      .nonempty('O campo e-mail é obrigatório'),
    confirm_password: z
      .string()
      .min(6, 'A senha precisa ter, no mínimo 6 caracteres')
      .nonempty('O campo senha é obrigatório'),
    password: z
      .string()
      .min(6, 'A senha precisa ter, no mínimo 6 caracteres')
      .nonempty('O campo senha é obrigatório'),
    name: z
      .string()
      .min(2, 'A nome precisa ter, no mínimo, 2 caracteres')
      .nonempty('O campo nome é obrigatório'),
  })

  const registerForm = useForm({
    resolver: zodResolver(createPersonFormSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
  })

  const { handleSubmit, getValues } = registerForm

  const handleRegister = async (credentials: any) => {
    if (
      getValues().password !== undefined &&
      getValues().confirm_password !== undefined &&
      getValues().password !== getValues().confirm_password
    )
      return

    await api.post('clients', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    })
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <main className="h-2/3 w-2/5 justify-between bg-white p-14 flex flex-col rounded-md shadow-md">
        <div className="flex -mt-3 -ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <h1 className="text-lg font-normal text-gray-400 -mt-2 ml-1">
          Preencha os campos abaixo para se cadastrar
        </h1>

        <form
          onSubmit={handleSubmit(handleRegister)}
          autoComplete="off"
          className="flex flex-col gap-2"
        >
          <FormProvider {...registerForm}>
            {formsState === 'NameEmail' ? (
              <NameEmailForm setNextPage={setFormsState} />
            ) : (
              <PasswordForm setBackPage={setFormsState} />
            )}
          </FormProvider>
        </form>
      </main>
    </div>
  )
}

export default Register
