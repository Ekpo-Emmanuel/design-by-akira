
import { MoveRight } from 'lucide-react';

export default function WhatWeDo() {
    const things = [
        {
            icon: './images/services/design.webp',
            title: 'CREATIVE DIRECTION',
            desc: 'Enhance your productivit by connecting with your tools'
        },
        {
            icon: './images/services/figma.webp',
            title: 'DIGITAL PRODUCTS',
            desc: 'Enhance your productivit by connecting with your tools'
        },
        {
            icon: './images/services/image.webp',
            title: 'BRANDING',
            desc: 'Enhance your productivit by connecting with your tools'
        },
    ]

    return (
        <div className="bg-black text-white">
            <div className="py-20 px-8 md:py-32  max-w-7xl mx-auto">
                <div>
                    <p className="text-2xl sm:text-3xl md:lg:text-[50px]  uppercase tracking-tighter">/<span className="font-bold md:font-medium">What We Do</span></p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 divide-y-[1px] md:divide-y-[0px]  divide-white/20">
                    {things.map((thing, index) => (
                        <div key={index} className="lg:px-5">
                            <div>
                                <img src={thing.icon} alt={thing.title} className="w-20 inline-block py-5" />
                            </div>
                            <div className="mt-10 uppercase tracking-tighter">
                                <p className="text-white/50 text-sm">
                                    0{index + 1}
                                    <span className="text-[22px] font-bold text-white ml-2">
                                        {thing.title}
                                    </span>
                                </p>
                                <p className="mt-4 mb-[10px] text-[18px] font-semibold">{thing.desc}</p>
                                <p className="text-[15px] font-semibold flex items-center gap-2">
                                    LEARN MORE
                                    <MoveRight size={16} className="text-white/50" />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


