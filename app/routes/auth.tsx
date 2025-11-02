import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    {title: 'Resumind | Auth'},
    {name: 'description', content: "Log Into your account"}
])

const Auth = () => {
    // Memanggil fungsi isLoading dari usePuterStore
    const {isLoading, auth} = usePuterStore();

    // Fungsi untuk memanggil link yang akan dituju setelah auth
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    
    // Mengecek dan mendireksikan user apabila sudah login
    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        // Menambahkan background cover pada auth page
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
            {/* Menambahkan border kotak */}
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    {/* Mengatur pemformatan teks */}
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {/* Menambahkan loading state */}
                        {isLoading ? (
                            // Jika halaman auth sedang loading
                            <button className=" auth-button animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            // Jika halaman auth tidak loading
                            <>
                                {auth.isAuthenticated ? (
                                    // Jika user sudah Log In
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    // Jika user belum Log In
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Auth