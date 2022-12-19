import Pagination from 'react-bootstrap/Pagination';
import { useLocation } from "wouter";

export default function ListPagination(props: any) {
    const [, navigate] = useLocation();

    function handlePaginate(change: string) {
        const page = parseInt(props.currentPage)
        if(change === "prev" && page === 1) return

        switch(change) {
            case "first":
                navigate("/list/1")
                break
            case "next":
                navigate(`/list/${page + 1}`)
                break
            case "prev":
                navigate(`/list/${page - 1}`)
                break
            default:
                break
        }
    }

    return (
        <Pagination style={{marginLeft: "10px"}}>
          <Pagination.First onClick={() => handlePaginate("first")} />
          <Pagination.Prev onClick={() => handlePaginate("prev")} />
          <Pagination.Ellipsis />
          <Pagination.Item disabled>{props.currentPage}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next onClick={() => handlePaginate("next")} />
        </Pagination>
    )
}