"use client";

import Image from "next/image";
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { LampContainer } from "@/components/effects/lamp";
import { motion } from "framer-motion";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen justify-between flex flex-col w-full items-center">
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full ">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Build the future
              <br /> with robotics club
            </motion.h1>
          </LampContainer>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-[1300] ">
          <section className="flex flex-col items-center justify-center w-full gap-4 p-8">
            <span className="text-3xl font-bold ">
              Frequently asked questions
            </span>
            <div className="flex flex-col items-center justify-center w-full">
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Is it free to join?"
                  subtitle="Good question."
                  title="Is it free to join?"
                >
                  We don't charge anything, but I don't mind you buy me a shot
                  or two
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="How do I join?"
                  subtitle={<span>Just join the Whatsapp Group</span>}
                  title="How do I join?"
                >
                  Yeah, Just join the whatsapp group
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="How do I start a project through Robotic Club?"
                  subtitle="Reach out to us"
                  title="How do I start a project through Robotic Club?"
                >
                  Just reach out to any of our board members or send a message
                  in our discord or whatsapp group , we'll be in touch with you!
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="What kind of project can I start?"
                  subtitle="All kind of ideas are welcome"
                  title="What kind of project can I start?"
                >
                  We're pretty much open to all kind of ideas, software,
                  hardware, events, music or anything? Just reach out to us and
                  we'll discuss the possibilities. Don't be shy, we wno't bite
                  you,.. I think
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </HeroUIProvider>
  );
}
