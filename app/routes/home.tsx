import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  
  // Memanggil fungsi isLoading dari usePuterStore
  const {isLoading, auth} = usePuterStore();

  // Fungsi untuk mengarahkan ke link yang akan dituju
  const navigate = useNavigate();
    
  // Mengecek dan mendireksikan user ke auth page jika belum login
  useEffect(() => {
      if (!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  // Menambahkan background cover pada homepage
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    
    {/* Memanggil atribut Navbar.tsx ke homepage */}
    <Navbar/>
    
    {/* mengelompokan page heading dan resumes array checker ke dalam main-section */}
    <section className="main-section">
      
      {/* Menambahkan page heading */}
      <div className="page-heading py-14">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
      
      {/* Mengecek apakah array resumes (di index.ts) memiliki data */}
      {resumes.length > 0 && (
        <div className="resumes-section">
          {/* Melooping setiap array yang ada pada item resume */}
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
      )}
    </section>
  </main>;
}