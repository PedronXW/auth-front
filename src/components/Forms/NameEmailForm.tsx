import { Envelope, Person } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { RegisterFormState } from '../../pages/Register'
import { Input } from '../Input'

type NameEmailFormProps = {
  setNextPage: (state: RegisterFormState) => void
}

const NameEmailForm = ({ setNextPage }: NameEmailFormProps) => {
  const {
    formState: { errors },
    getValues,
  } = useFormContext()

  const handleContinue = () => {
    if (!getValues('name') || !getValues('email')) return

    if (errors.name || errors.email) return

    setNextPage('Password')
  }

  return (
    <div className="flex flex-col gap-2">
      <Input.Root errors={errors} id="name" initialVisibility={false}>
        <Input.Icon icon={<Person color="gray" size={20} />} />
        <Input.Text placeholder="Nome" />
        <Input.Action />
      </Input.Root>
      {errors.name ? (
        <span
          aria-label={
            'O campo nome possui uma inconsistencia, por favor, verifique: ' +
            errors!.name!.message?.toString()
          }
          className="h-5 text-xs text-red-500 pl-2"
        >
          {errors!.name!.message?.toString()}
        </span>
      ) : (
        <div className="h-5"> </div>
      )}
      <Input.Root id="email" errors={errors} initialVisibility={false}>
        <Input.Icon icon={<Envelope color="gray" size={20} />} />
        <Input.Text placeholder="Email" />
        <Input.Action />
      </Input.Root>
      {errors.email ? (
        <span
          aria-label={
            'O campo email possui uma inconsistencia, por favor, verifique: ' +
            errors!.email!.message?.toString()
          }
          className="h-5 text-xs text-red-500 pl-2"
        >
          {errors!.email!.message?.toString()}
        </span>
      ) : (
        <div className="h-5"> </div>
      )}

      <div className="flex gap-10 flex-1 mt-2">
        <Link
          className="p-2 grow-1 w-full cursor-pointer flex items-center bg-gray-300 border-primary_color rounded-md text-secundary_color justify-center"
          to={'/'}
        >
          Login
        </Link>
        <button
          aria-label="Confirmar Register"
          type="button"
          onClick={handleContinue}
          className="h-10 grow-1 w-full items-center flex cursor-pointer text-base self-center bg-green-500 text-white rounded-md justify-center shadow-md text-base"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default NameEmailForm
