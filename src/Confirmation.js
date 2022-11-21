import ReactDom from 'react-dom'

export default function Confirmation({children, open, onClose}) {

    if(!open) return


    return ReactDom.createPortal(
        <div className='fixed top-0 left-0 right-0 bottom-0 z-50'>

            <div className="fixed max-md:top-[72px] md:top-[0px] md:left-[100px] left-0 right-0 bottom-0 bg-black bg-opacity-50" onClick={onClose}>
            </div>

            <div className="absolute w-4/5 max-w-md top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
                {children}
            </div>
        </div>,
        document.getElementById("confirmation")
    )
}