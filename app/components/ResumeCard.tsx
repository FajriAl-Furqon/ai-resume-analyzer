import { Link } from "react-router"
import ScoreCircle from "./ScoreCircle"

// {resume: {id, companyName, jobTitle, feedback} -> Langsung mengekstrak properties dari object resume dengan metode destructuring nested
const ResumeCard = ({resume: {id, companyName, jobTitle, feedback, imagePath}} : {resume: Resume}) => {
    return (
        // Menambahkan kolom resume card berdasarkan jumlah array resume dengan animasi fade in berdurasi 1000
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            {/* mengelompokan heading teks dan score circle ke dalam resume-card-header */}
            <div className="resume-card-header">
                {/* Menambahkan heading teks pada kolom resume card */}
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                
                {/* Menambahkan score circle pada kolom resume card */}
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>
            
            {/* mengimport foto kedalam kolom resume card */}
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={imagePath}
                        alt="resume"
                        // max-sm:h-[200px] -> Pada screen small, tinggi menjadi 200px
                        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                    />
                </div>
            </div>
        </Link>
    )
}
export default ResumeCard