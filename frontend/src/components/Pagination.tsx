import Pagination from "react-bootstrap/Pagination";
import { useLocation } from "wouter";

enum NavigateListOptions {
  First = "/list/1",
  OtherPage = "/list/"
}

export default function ListPagination(props: any) {
  const [, navigate] = useLocation();

  function handlePaginate(change: string) {
    const page = parseInt(props.currentPage);
    if (change === "prev" && page === 1) return;

    switch (change) {
      case "first":
        navigate(First);
        break;
      case "next":
        navigate(OtherPage + `${page + 1}`);
        break;
      case "prev":
        navigate(OtherPage + `${page - 1}`);
        break;
      default:
        break;
    }
  }

  return (
    <Pagination style={{ marginLeft: "10px" }}>
      <Pagination.First onClick={() => handlePaginate("first")} />
      <Pagination.Prev onClick={() => handlePaginate("prev")} />
      <Pagination.Ellipsis />
      <Pagination.Item disabled>{props.currentPage}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next onClick={() => handlePaginate("next")} />
    </Pagination>
  );
}
