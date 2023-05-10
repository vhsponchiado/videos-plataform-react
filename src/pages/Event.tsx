import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { useParams } from "react-router-dom"


export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return <>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">

                {slug ?
                    <Video lessonSlug={slug} />
                    : <div className="flex-1">
                        <div className="flex justify-center mt-[25vh]">
                        <img src="/src/assets/Not_Found.png" className="max-w-[250px]" alt="0" />
                        </div> 
                      </div>}
                <div className="hidden xl:flex">
                  <Sidebar />
                </div>
            </main>
        </div>
    </>
}