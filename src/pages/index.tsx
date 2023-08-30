"use client";
import MojiInput from "@/components/MojiInput";
import CrossMoji from "@/components/CrossMoji";
import MojiBar from "@/components/MojiBar";

export default function Home() {
  return (
    <main className="container flex flex-col mx-auto px-4 h-screen">
      <div>
        <MojiBar/>
      </div>
      <div className="flex flex-col w-full p-4 justify-center align-center grow">
        <div className="flex flex-row justify-center flex-nowrap">
          <MojiInput
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face%20with%20Horns.png"
            width={30}
            height={30}
            answer="A"
          />
          <MojiInput
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png"
            width={30}
            height={30}
            answer="L"
          />
          <MojiInput
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Baby.png"
            width={30}
            height={30}
            answer="I"
          />
          <MojiInput
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Artist%20Medium-Dark%20Skin%20Tone.png"
            width={30}
            height={30}
            answer="E"
          />
          <MojiInput
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Bear.png"
            width={30}
            height={30}
            answer="N"
          />
        </div>
      </div>
    </main>
  )
}
