import { CaretRight, DiscordLogo, FileArrowDown, Headset } from 'phosphor-react';
import { useGetLessonBySlugQuery } from '../graphql/generated';
import YouTube from 'react-youtube';


interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery( {
        variables: {
            slug: props.lessonSlug,
        }
    })


    if (!data || !data.lesson) {
        return <>
            <div className="flex-1">
                <p className="leading leading-relaxed text-sm text-gray-300">Carregando...</p>
            </div>
        </>
    }
   

    return <>
        <div className="flex-1 bg-blurVideos bg-no-repeat bg-cover">
            <div className="bg-dark flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                     <YouTube videoId={data.lesson.videoId} opts={{position: 'relative',width: '100%', height: '600px'}}/>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16 flex-col xl:flex-row">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>


                        {data.lesson.teacher && (
                             <div className=' flex items-center gap-4 mt-6'>
                             <img
                                 className="h-16 w-16 rounded-full border-2 border-blue-500"
                                 src={data.lesson.teacher.avatarURL}
                                 alt=""
                             />
 
                             <div className="flex flex-col leading-relaxed">
                                 <strong className="font-bold text-2xl block"> {data.lesson.teacher.name}</strong>
                                 <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                             </div>
                         </div>
                        )}

                   </div>
                    <div className="flex flex-col text-sm gap-4">
                        <a href="#" className="p-4  bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade no discord
                        </a>
                        <a href="#" className="p-4  text-blue-500 flex items-center rounded border border-blue-500 font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Headset size={24} />
                            Suporte Online
                        </a>
                    </div>
                </div>

                <div className=" flex flex-col  xl:gap-8 mt-20 xl:grid xl:grid-cols-2"> 

                    <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> Material complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o sua produtividade.
                            </p>
                        </div>

                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors mt-4 xl:mt-0'>
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl"> Wallpaper exclusivos </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos da RAMSolution e personalize sua máquina.
                            </p>
                        </div>

                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </>
}