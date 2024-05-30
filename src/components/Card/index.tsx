export default function Card(){

    return(
        <div className="w-full max-w-[25rem] h-72 rounded-md shadow-md p-4 bg-white dark:bg-dark-300 flex flex-col justify-center gap-5">
            <span className="text-5xl">🌐</span>
            <h2 className="text-base lg:text-xl font-semibold">Esse é um Server Component</h2>
            <article className="text-justify">Esse é um exemplo de componente renderizado pelo lado do servidor mas que sofre alterações de Tema providas por um contexto que é criado no lado do cliente.</article>
        </div>
    )
}