function Header() {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <p className="text-4xl">🤖</p>
                <button
                    type="button"
                    onClick={() => window.open("/")}
                    className="black_btn"
                >
                    Home
                </button>
            </nav>
            <h1 className="head_text">
                Essay summerizier with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading experience with the power of AI, with an
                open-source article summarizer that trasnforms long articles
                into short clear and concise summaries in seconds.
            </h2>
        </header>
    );
}

export default Header;
