import { useState, type FormEvent, type HtmlHTMLAttributes } from "react"
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar"

const upload = () => {
    
    // Memanggil fungsi isProcessing dari useState
    const [isProcessing, IsProcessing] = useState();
    
    // Memanggil fungsi statusText dari useState
    const [statusText, StatusText] = useState('');

    // State untuk menyimpan file yang dipilih user
    const [file, setFile] = useState<File | null>(null);

    // Handler untuk update state file ketika user memilih/menghapus file
    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }

    //Menangani submit form upload
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        
        // Mencegah reload halaman saat submit
        e.preventDefault();
        
        // Mendapatkan data dari form upload
        const form = e.currentTarget.closest('form');
        if (!form) return;
        
        //Ekstrak data dari input form
        const formData = new FormData(form);
        const companyName = formData.get('company-name') as string;
        const jobTitle = formData.get('job-title') as string;
        const jobDescription = formData.get('job-description') as string;
    }

    return (

        // Menambahkan background cover pada upload page
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            
            {/* Memanggil atribut Navbar.tsx ke homepage */}
            <Navbar/>
            
            {/* mengelompokan page heading dan form upload ke dalam main-section */}
            <section className="main-section">
                <div className="page-heading py-14">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            {/* Jika file sedang diproses */}
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className="w-full"/>
                        </>
                    ) : (
                        // Jika file belum diproses
                        <h2>Drop your resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        // Jika file belum diupload, akan menampilkan
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                {/* Menambahkan label "Company Name" */}
                                <label htmlFor="company-name">Company Name</label>
                                {/* Menambahkan bar input "Company Name" */}
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name"></input>
                            </div>
                            <div className="form-div">
                                {/* Menambahkan label "Job Title" */}
                                <label htmlFor="job-title">Job Title</label>
                                {/* Menambahkan bar input "Job Title" */}
                                <input type="text" name="job-title" placeholder="Job Title" id="job-title"></input>
                            </div>
                            <div className="form-div">
                                {/* Menambahkan label "Job Description" */}
                                <label htmlFor="job-description">Job Description</label>
                                {/* Menambahkan bar text area input "Job Description" */}
                                <textarea rows={5} name="job-description" placeholder="Job Description" id="job-description"></textarea>
                            </div>
                            <div className="form-div">
                                {/* Menambahkan label "Upload Resume" */}
                                <label htmlFor="uploader">Upload Resume</label>
                                {/* Memanggil atribut FileUploader dari FileUploader.tsx ke upload.tsx */}
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>
                            {/* Menambahkan tombol analyze resume */}
                            <button className="primary-button" type="submit">
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
export default upload