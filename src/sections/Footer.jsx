const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t
        border-black-300 flex justify-between items-center
         flex-wrap gap-5">
            <div className="text-amber-700 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <img
                    src="/assets/instagram.svg"
                    alt="instagram"
                    className="w-1/2 h-1/2" />
                </div>
                <div className="social-icon">
                    <img
                        src="/assets/thread.svg"
                        alt="threads"
                        className="w-1/2 h-1/2" />
                </div>
            </div>
            <p className="text-amber-700">
                &copy; 2023 SSTACYMO. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
