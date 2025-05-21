type HeaderProps = {
    pagetitle?: string;
};

export default function Header({ pagetitle = "this is just homework" }: HeaderProps) {
    return (
        <div className="w-full flex flex-col items-center justify-between gap-0">
        <header className="w-full flex items-center justify-between p-5 px-10 bg-green-600 text-green-50">
            <div className="flex gap-5 items-center">
                <h1 className='text-3xl font-black h-fit'>
                    <a href="/" className="hover:opacity-75 animation duration-200">
                    SpeciMen
                    </a>
                    </h1>
                <p className="text-green-200 h-fit">{pagetitle}</p>
            </div>
        </header>
        <nav className="w-full flex items-center justify-between p-1 px-10 bg-green-800 text-green-200">

            <ul className='flex gap-5 justify-around items-center grow'>

                <li className="text-semibold flex w-fit justify-center"><a className='w-fit h-fit animation duration-200 hover:opacity-75' href="/species/poraque">Poraquê</a></li>
                <li className="text-semibold flex w-fit justify-center"><a className='w-fit h-fit animation duration-200 hover:opacity-75' href="/species/sucuri">Sucuri</a></li>
                <li className="text-semibold flex w-fit justify-center"><a className='w-fit h-fit animation duration-200 hover:opacity-75' href="/species/jacaretinga">Jacaretinga</a></li>
                <li className="text-semibold flex w-fit justify-center"><a className='w-fit h-fit animation duration-200 hover:opacity-75' href="/species/acaizeiro">Açaizeiro</a></li>

            </ul>

        </nav>
        </div>
    );
}