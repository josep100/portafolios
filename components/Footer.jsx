export default function Footer (){
    return (
        <footer className="dark:bg-transparent bg-slate-200 py-5">
            <div className="container mx-auto px-2 sm:px-4">
                <p className="text-center text-sm uppercase dark:text-white text-black">&copy; {new Date().getFullYear()} josep perales. todos los derechos reservados.</p>
            </div>
        </footer>
    );
}