import Header from "@/components/Header/Header"
import MainBody from "@/components/Main.tsx/MainBody"


const page = () => {
  return (
    <section className="px-[100px] bg-[#F2F5F9] max-xlg:px-[20px] max-lg:px-[50px] max-sm:px-[20px] max-xsm:px-[10px] dark:bg-[#3c2f41] h-full">
    <Header/>
    <MainBody/>
    </section>
  )
}

export default page