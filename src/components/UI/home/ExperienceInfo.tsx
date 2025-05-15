import { useState } from "react"
import { FaLink, FaLocationDot } from "react-icons/fa6"
interface IExperienceInfoProps {
    position: string
    period: string
    imgUrl: string
    location: string
    siteUrl: string
    stack: string[]
    children: React.ReactNode
}

const ExperienceInfo: React.FunctionComponent<IExperienceInfoProps> = ({ position, period, imgUrl, location, siteUrl, stack, children }) => {

    const [blockExpand, SetBlockExpand] = useState<boolean>(false)

    const handelClick = (): void => {
        SetBlockExpand(prev => !prev)
    }

    return (
        <div className={`experience-full-info max-w-[730px] flex flex-col gap-4 overflow-hidden transition-all duration-500 ${blockExpand ? 'expanded' : 'h-[50px]'}`}>
            <div
                className="info-header flex justify-between items-center gap-4 py-3 px-5 max-h-[50px] border-2"
                onClick={handelClick}
            >
                <div className="position-info flex justify-between items-center flex-1 cursor-default text-xl">
                    <div className="position-name">
                        { position }
                    </div>
                    <div className="position-time">
                        { period }
                    </div>
                </div>
                <div className="expand-btn relative cursor-pointer rounded-full w-ful h-[30px] w-[30px]">
                    <div className={`lin-vertical absolute right-[50%] top-[47%] translate-x-[50%] w-[15px] h-[2px] rounded-full bg-white transition-all duration-500 ${blockExpand ? 'rotate-0' : 'rotate-[270deg]'}`}></div>
                    <div className={`line-horizontal absolute right-[50%] top-[47%] translate-x-[50%] w-[15px] h-[2.1px] rounded-full bg-white transition-all duration-500 ${blockExpand ? '-rotate-180' : 'rotate-0'}`}></div>
                </div>
            </div>
            <div className="info-body border-2 p-5 flex flex-row-reverse items-center gap-10">
                <div className="image-side max-w-[250px] text-center">
                    <img src={ imgUrl } alt="Company_Image" />
                </div>
                <div className="text-side flex flex-col gap-5">
                    <div className="company-info flex items-center gap-5 text-slate-50/80">
                        <div className="location flex items-center gap-1.5 text-sm cursor-default">
                            <FaLocationDot /> { location }
                        </div>
                        <div className="website">
                            <a className="flex items-center gap-1.5 text-sm underline" href={ siteUrl } target="_blank">
                                <FaLink /> { siteUrl }
                            </a>
                        </div>
                    </div>
                    <div className="experience-text text-xl">
                        { children }
                    </div>
                    <div className="stack flex flex-wrap gap-2">
                        { stack.map(s => <span className="bg-blue-900 py-1 px-2.5 rounded-md text-xs"> { s } </span>) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo