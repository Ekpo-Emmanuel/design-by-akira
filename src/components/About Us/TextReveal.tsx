"use client";
 
import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TextRevealByWordProps {
    text: string;
    className?: string;
}

export const TextReveal: FC<TextRevealByWordProps> = ({
    text,
    className,
  }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
   
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const words = text.split(" ");
   
    return (
      <div ref={targetRef} className={cn("relative z-0 h-[200vh] bg-black", className)}>
        <div
          className={
            "sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center px-[1rem] py-[5rem]"
          }
        >
          <p
            ref={targetRef}
            className={
              "flex flex-wrap p-5 tracking-tighter text-[25px] sm:text-[38px] sm:leading-[60px] text-white/30 font-semibold"
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    );
  };
   
  interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
  }
   
  const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
      <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
        <span className={"absolute opacity-30"}>{children}</span>
        <motion.span
          style={{ opacity: opacity }}
          className={"text-white"}
        >
          {children}
        </motion.span>
      </span>
    );
  };
   
  export default TextReveal;

