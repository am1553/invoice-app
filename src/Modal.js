import ReactDom from 'react-dom'

export default function Modal({children, open, onClose}) {

    if(!open) return

    return ReactDom.createPortal(
        <>
            <div className="absolute max-md:top-[72px] md:top-[0px] md:left-[100px] left-0 right-0 bottom-0 bg-black bg-opacity-50" onClick={onClose} >
                
            </div>
            <div className="w-4/5 absolute sm:left-0 max-md:top-[72px] lg:max-w-[700px] lg:top-0 lg:left-[100px] max-lg:left-[100px]">
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}