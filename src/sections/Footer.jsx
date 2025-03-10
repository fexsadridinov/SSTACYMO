const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="flex gap-3">
                <a
                    href="https://www.instagram.com/sstacymo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="/assets/instagram.svg"
                        alt="Instagram"
                        className="w-1/2 h-1/2"
                    />
                </a>
                <a
                    href="https://www.threads.net/@sstacymo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="/assets/thread.svg"
                        alt="Threads"
                        className="w-1/2 h-1/2"
                    />
                </a>
            </div>
            <p className="text-amber-700">
                &copy; 2023 SSTACYMO. All rights reserved.
            </p>
        </section>
    );
};

export default Footer;
