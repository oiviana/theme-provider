export default function About(){
    return(
        <div className="text-dark-500 dark:text-light-300 flex flex-col gap-5">
            <h1 className=" flex items-center text-lg lg:text-4xl  font-semibold gap-3 mb-5"><span className="text-lg lg:text-5xl">🎨</span> Uma forma simples de passar temas no seu projeto de forma global!</h1>
            <article className="text-lg lg:text-xl text-justify !leading-8">
                {"O 'Next Themes' possibilita uma forma simples e concisa de compartilhar temas claros e escuros na sua aplicação, utilizando Tailwind CSS."}
            </article>
            <article className="text-lg lg:text-xl text-justify !leading-8">
                {"Através de um Context você pode prover seu tema de preferência, ou de preferência do sistema, por toda sua aplicação sem os famosos efeitos de 'flicker' durante o carregamento da página."}
            </article>
            <article className="text-lg lg:text-xl text-justify !leading-8">
                {"Um detalhe interessante é que contextos precisam ser 'client components' para funcionarem, mas, isso não significa que você não pode compartilhar de seus dados com server components!"}
            </article>
            <article className="text-lg lg:text-xl text-justify !leading-8">
                {"No caso desses temas, por exemplo, você pode criar um provider como 'client component' e passá-lo na raiz da sua aplicação, afetando tanto seus componentes do lado do servidor, como do lado do cliente!!"}
            </article>
        </div>
    )
}