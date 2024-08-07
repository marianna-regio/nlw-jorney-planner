import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (e: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({closeConfirmTripModal, createTrip}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-lg font-semibold">
            Confirmar criação da viagem
          </h2>
          <button>
            <X
              className="size-5 text-zinc-400"
              onClick={closeConfirmTripModal}
            />
          </button>
        </div>

        <p className="text-sm text-zinc-400">
          Para concluir a criação da viagem para{" "}
          <span className="text-zinc-100 font-semibold">
            Florianópolis, Brasil
          </span>{" "}
          nas datas de{" "}
          <span className="text-zinc-100 font-semibold">
            {" "}
            16 a 27 de Agosto de 2024
          </span>{" "}
          preencha seus dados abaixo:
        </p>
      </div>

      <form onSubmit={createTrip}>
        <div className="flex flex-col gap-3">
          <div className=" px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 h-14">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 justify-center rounded-lg px-5 h-10 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
