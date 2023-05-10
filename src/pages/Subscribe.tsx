import { Logo } from "../components/Logo"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createSubscriber,{loading}] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
      await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event')
    }

    return <>
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex flex-col items-center xl:justify-between  xl:flex-row mt-20 mx-auto ">

                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Conheça o <strong className="text-blue-500"> potencial</strong> de sua empresa.
                    </h1>

                    <p className="mt-4 text-gray-400 leadin-relaxed">
                        Em apenas uma semana você vai dominar os recursos do sistema e vai sair na frente da sua <strong className="text-blue-500">concorrência</strong> .
                    </p>
                </div>

                <div className="p-8 bg-gray-700  mt-8 xl:mt-0 w-full sm:w-auto sm:border sm:border-gray-500 sm:rounded">
                    <strong className="text-2xl  mb-6 block">Inscreva-se gratuitamente</strong>

                    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubscribe}>

                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />

                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-500 text-sm uppercase font-bold py-4 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>

                    </form>
                </div>

            </div>
            <img src="/src/assets/ram_mockup.png" className="mt-10" alt="0" />
        </div>
    </>
}