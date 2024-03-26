import { Lock } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { RegisterFormState } from '../../pages/Register'
import { Input } from '../Input'

type NameEmailFormProps = {
  setBackPage: (state: RegisterFormState) => void
}

const PasswordForm = ({ setBackPage }: NameEmailFormProps) => {
  const {
    formState: { errors },
    getValues,
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2">
      <Input.Root id="password" errors={errors}>
        <Input.Icon icon={<Lock color="gray" size={20} />} />
        <Input.Text placeholder="Password" />
        <Input.ActionPassword />
      </Input.Root>
      {errors.password ? (
        <span
          aria-label={
            'O campo senha possui uma inconsistencia, por favor, verifique: ' +
            errors!.password!.message?.toString()
          }
          className="h-5 text-xs text-red-500 pl-2"
        >
          {errors!.password!.message?.toString()}
        </span>
      ) : (
        <div className="h-5"> </div>
      )}

      <Input.Root id="confirm_password" errors={errors}>
        <Input.Icon icon={<Lock color="gray" size={20} />} />
        <Input.Text placeholder="Confirm Password" />
        <Input.ActionPassword />
      </Input.Root>
      {getValues().password !== undefined &&
      getValues().confirm_password !== undefined &&
      getValues().password !== getValues().confirm_password ? (
        <span
          aria-label={'As senhas não conferem'}
          className="h-5 text-xs text-red-500 pl-2"
        >
          As senhas não conferem
        </span>
      ) : (
        <div className="h-5"> </div>
      )}

      <div className="flex gap-10 flex-1 mt-2">
        <button
          aria-label="Confirmar Register"
          type="button"
          onClick={() => setBackPage('NameEmail')}
          className="p-2 grow-1 w-full cursor-pointer flex items-center bg-gray-300 border-primary_color rounded-md text-secundary_color justify-center"
        >
          Voltar
        </button>
        <button
          aria-label="Confirmar Register"
          type="submit"
          className="h-10 grow-1 w-full items-center flex cursor-pointer text-base self-center bg-green-500 text-white rounded-md justify-center shadow-md text-base"
        >
          Registrar
        </button>
      </div>
    </div>
  )
}

export default PasswordForm
