
import Link from "next/link";

export function SidebarButton({ text, url }: { text: string, url: string }) {
    return (
        <Link className='
      text-gray-700 hover:text-gray-900 text-sm font-medium 
      hover:bg-white hover:text-black'
            href={`${url}`}>
            {text}
        </Link>
    )
}

export function Nav() {
    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white shadow-sm" >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Site Name */}
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-gray-900 font-medium leading-tight">
                            <div className="text-sm font-bold">早期中华文明多模态大模型</div>
                            <div className="text-xs text-gray-600">Early Chinese Civilization Multimodal Model</div>
                        </a>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <SidebarButton text="主页" url="/"></SidebarButton>
                        <SidebarButton text="测评集" url="/benchmark"></SidebarButton>
                        <SidebarButton text="模型" url="/model"></SidebarButton>
                        <SidebarButton text="Agent" url="/agent"></SidebarButton>
                        <SidebarButton text="团队" url="/team"></SidebarButton>
                        <a href="#" className="bg-black text-white px-3 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                            中文
                        </a>
                    </div>
                    </div>
                </div>

            </nav>

        </>
    )
}

export function Footer() {
    return (
        <>
            <footer className="mt-2 bg-white border-t text-sm text-gray-500 py-12 pt-10">
                <div className="flex flex-col items-center text-center space-y-2">
                    <p>© 2025 早期中华文明多模态大模型团队. 版权所有</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700">隐私政策</a>
                        <span className="text-gray-400">|</span>
                        <a href="#" className="text-blue-500 hover:text-blue-700">了解团队</a>
                        <span className="text-gray-400">|</span>
                        <a href="#" className="text-blue-500 hover:text-blue-700">加入我们</a>
                    </div>
                </div>
            </footer>
        </>
    )
  }