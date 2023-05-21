import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Toy Cars Emporium`;
    }, [title])
}


export default useTitle;